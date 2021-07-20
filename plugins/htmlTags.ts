import Vue from 'vue'
declare module 'vue/types/vue' {
    interface Vue {
        $htmlTags(str:string): string
    }
}
// Vue.prototype.$htmlTags = (str: string) => str.replace(/\n/g,'<br>');
Vue.prototype.$htmlTags = (str: string) => {
    let arStr = str.split(/\n/g);
    let output = '';
    arStr.forEach(i => {
        output +=  '<em class="br">' + i + '</em>';
    })
    // str.replace(/\n/g,'<br>')
    return  output
};
