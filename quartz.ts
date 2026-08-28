import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import MelkorNav from "./quartz/components/MelkorNav"

componentRegistry.register("MelkorNav", MelkorNav, "builtin")

const config = await loadQuartzConfig()

export default config
export const layout = await loadQuartzLayout()