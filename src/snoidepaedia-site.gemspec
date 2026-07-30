# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "snoidepaedia-site"
  spec.version       = "0.1.0"
  spec.authors       = ["Xiao Tian"]
  spec.summary       = "Jekyll plugin wiring src/ into the Snoídepaedia site."
  spec.files         = ["lib/snoidepaedia-site.rb"]
  spec.require_paths = ["lib"]

  spec.add_dependency "jekyll", ">= 3.8.5"
end
