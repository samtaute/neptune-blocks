/**
Injects a script into the <head> element of the DOM
 */
export function injectScript(src: string, attributes?: any){
    const script = document.createElement('script')
    if (attributes && typeof attributes === 'object') {
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value as any)
      })
    }
    script.src = src
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentElement('beforeend', script)
    return script
  }