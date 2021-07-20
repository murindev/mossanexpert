export interface IPage {
    staticData?: IStaticData
    catalog?: ICatalog[]
    branches?: IBranch[]
    clients?: IClient[]
    reviews?: IReview[]
    menu?: IMenu
}

export interface IStaticData {
    id: number
    page_id: string
    title: string
    sort: number
    active: number
    intro: string
    text: string
    subtext: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    app_form_title: string
    app_form_text: string
    app_form_subtext: string
    banner: string
    banner_text: string
    image: string
    image_text: string
    achievement_id: number
    achievement_block?: IAchievement
    banner_long: null | IBanner
    banner_short: null | IBanner
    business_services: null | IBusiness
    title_first: string
    subtitle_first: string
    text_first: string
    title_second: string
    subtitle_second: string
    text_second: string
    title_third: string
    subtitle_third: string
    text_third: string
    created_at: string
    updated_at: string
}

export interface ICatalog {
    id:number
    active:number
    sort:number
    title:string
    title_short:string
    banner: string
    slug:string
    cnt:number
    intro:string
    banner_long:number
    banner_short:number
    text:string
    app_form_title:string
    app_form_text:string
    app_form_subtext:string
    subtext:string
    created_at:string
    updated_at:string
}

export interface IBranch {
    id: number
    cnt: number
    title: string
    icon: string
    icon_small: string
    sort: number
    active: number
    text: string
    app_form_title: string
    app_form_text: string
    app_form_subtext: string
    app_form_price: string
    slug: string
    created_at: string
    updated_at: string
}

export interface IAchievement {
    id: number
    name: string
    title_first: string
    subtitle_first: string
    text_first: string
    title_second: string
    subtitle_second: string
    text_second: string
    title_third: string
    subtitle_third: string
    text_third: string
    created_at: string
    updated_at: string
}

export interface IBanner {
    id?: number
    name?: string
    color?: number
    title?: string
    text?: string
    img?: string
    created_at?: string
    updated_at?: string

}

export interface IBusiness {
    id: number
    branches: string
    active: number
    sort: number
    title: string
    slug: string
    icon: string
    intro: string
    banner_long: number
    banner_short: number
    text: string
    app_form_title: string
    app_form_text: string
    app_form_subtext: string
    subtext: string
    created_at: string
    updated_at: string
}

export interface IClient {
    id: number
    sort: number
    active: number
    title: string
    icon: string
    created_at: string
    updated_at: string
}

export interface IReview {
    id: number
    title: string
    sort: number
    active: number
    slider: number
    icon: string
    filename: string
    created_at: string
    updated_at: string
}

export interface IMessage {
    heading?: string
    text?: string
}

export interface IMenu {
    left?: IMenuItem[]
    bottom?: IMenuItem[]
}

export interface IMenuItem {
    title: string
    title_short: string
    slug: string
    menu_icon: string
    menu_desc: string
}
