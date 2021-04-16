import { Configuration, RuleSetCondition } from "webpack"

interface Options {
  cssLoaderOptions?: object | false
  postcssLoaderOptions?: object | false
  rule?: RuleSetCondition
  sassLoaderOptions?: object | false
  styleLoaderOptions?: object | false
}

declare interface PresetTailwind {
  webpack: (config?: Configuration, options?: Options) => Configuration
}

export = PresetTailwind
