import { defineNuxtModule, addComponent } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

export default defineNuxtModule({
  meta: {
    name: '@tbostest/ps-component',
    configKey: 'psComponent'
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    // Register components
    addComponent({
      name: 'LoginComponent',
      filePath: join(runtimeDir, 'components', 'LoginComponent.vue')
    })

    // Add composables directory
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(join(runtimeDir, 'composables'))
    })
  }
})