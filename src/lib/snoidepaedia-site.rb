# frozen_string_literal: true

# The Jekyll source dir (`docs/`) holds only pages and content assets; all site
# code lives here in `src/`, grouped by kind. Jekyll cannot look outside its
# source dir for includes or for files to publish, so this plugin wires it back:
#
#   src/html, src/  -> searched by {% include %}
#   src/sass        -> on the Sass load path, ahead of the theme's
#   src/js/vendor   -> published as /assets/js/vendor/...
#   src/pdfjs       -> published as /pdfjs/...
#
# Shipped as a path gem (see the Gemfile) and required by name from the
# `plugins` list in docs/_config.yml, so it resolves from any working directory.
module SiteCode
  ROOT = File.expand_path("..", __dir__)

  # Searched in order by {% include %}. `src/html` lets the theme's layouts find
  # their overrides by bare name (`head_custom.html`); ROOT resolves the
  # kind-prefixed paths pages use (`html/entity.html`, `js/typewriter.js`).
  INCLUDES_DIRS = [File.join(ROOT, "html"), ROOT].freeze

  SASS_DIR = File.join(ROOT, "sass")

  # Directories served as-is, as "path under ROOT" => "path under the site root".
  # Only the JS that pages load by URL is published; the rest is inlined by
  # {% include %} and needs no copy.
  PUBLISHED_DIRS = {
    "js/vendor" => "assets/js/vendor",
    "pdfjs"     => "pdfjs",
  }.freeze

  # A static file read from `src/`, where the source path and the published path
  # need not line up (`src/js/vendor/x.js` -> `/assets/js/vendor/x.js`).
  class PublishedFile < Jekyll::StaticFile
    def initialize(site, source_path, dir, name)
      super(site, ROOT, dir, name)
      @source_path = source_path
    end

    def path
      @source_path
    end
  end

  # Adds every file under PUBLISHED_DIRS to the site as a static file, so that
  # `src/pdfjs/web/viewer.html` is written to `pdfjs/web/viewer.html`.
  class StaticFileGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      PUBLISHED_DIRS.each do |from, to|
        base = File.join(ROOT, from)
        next unless File.directory?(base)

        Dir.glob(File.join(base, "**", "*"), File::FNM_DOTMATCH).each do |path|
          next unless File.file?(path)

          relative = File.join(to, path.delete_prefix("#{base}/"))
          site.static_files << PublishedFile.new(
            site, path, "/#{File.dirname(relative)}", File.basename(relative)
          )
        end
      end
    end
  end
end

# `includes_load_paths` and the Sass load paths are both computed before plugins
# are loaded, so extend them once the site resets and before it is read.
Jekyll::Hooks.register :site, :after_reset do |site|
  paths = site.includes_load_paths
  SiteCode::INCLUDES_DIRS.reverse_each do |dir|
    paths.unshift(dir) unless paths.include?(dir)
  end

  sass = site.config["sass"] ||= {}
  sass["load_paths"] = Array(sass["load_paths"]).unshift(SiteCode::SASS_DIR).uniq
end
