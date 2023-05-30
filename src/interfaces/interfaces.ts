import {Period} from "./types";

export interface IManufacturer {
    man_id: string;
    man_name: string;
    is_car: string
    is_spec: string;
    is_moto: string;
}

export interface IModel {
    model_id: number;
    man_id: number;
    model_name: string;
    model_group: string;
    sort_order: number;
    cat_man_id: number;
    cat_model_id: number;
    cat_modif_id: number;
    is_car: boolean;
    is_moto: boolean;
    is_spec: boolean,
    show_in_salons: number,
    shown_in_slider: number
}

export interface ICategory {
    category_id: number;
    category_type: number;
    has_icon: number;
    title: string;
    seo_title: string;
    vehicle_types: number[]
}

export interface IProduct {
    car_id: number
    status_id: number
    user_id: number
    dealer_user_id: number
    paid_add: number
    photo: string
    pic_number: number
    prod_year: number
    prod_month: number
    man_id: number
    car_model: string
    price: number
    price_usd: number
    first_deposit: number
    price_value: number
    fuel_type_id: number
    gear_type_id: number
    drive_type_id: number
    door_type_id: number
    color_id: number
    saloon_color_id: number
    cylinders: number
    car_run: number
    car_run_km: number
    car_run_dim: number
    engine_volume: number
    airbags: number
    abs: boolean
    esd: boolean
    el_windows: boolean
    conditioner: boolean
    leather: boolean
    disks: boolean
    nav_system: boolean
    central_lock: boolean
    hatch: boolean
    right_wheel: boolean
    alarm: boolean
    board_comp: boolean
    hydraulics: boolean
    chair_warming: boolean
    climat_control: boolean
    obstacle_indicator: boolean
    customs_passed: boolean
    client_name: string
    client_phone: number
    model_id: number
    location_id: number
    parent_loc_id: number
    tech_inspection: boolean
    checked_for_duplicates: boolean
    order_number: number
    stickers: any
    changable: boolean
    auction: boolean
    has_turbo: boolean
    for_rent: boolean
    rent_daily: boolean
    rent_purchase: boolean
    rent_insured: boolean
    rent_driver: boolean
    currency_id: number
    vehicle_type: number
    category_id: number
    vin: string
    user_type: any
    prom_color: number
    special_persons: boolean
    back_camera: boolean
    car_desc: string
    order_date: string
    video_url: string
    hp: number
    hours_used: number
    photo_ver: number
    checked: boolean
    lang_type_id: number
    el_starter: number
    start_stop: boolean
    trunk: boolean
    windshield: boolean
    inspected_in_greenway: boolean
    license_number: string
    words_checked: number
    is_payd: boolean
    condition_type_id: number
    primary_damage_type: number
    secondary_damage_type: number
    auction_has_key: number
    is_auction: number
    saloon_material_id: number
    map_lat: number
    map_long: number
    zoom: number
    predicted_price: string
    hdd: number
    map_title: string
    has_catalyst: number
    tmp: string
    views: number
    dealerId: any
    has_logo: any
    logo_ver: any
    active_ads: any
    dealer_title: any
    has_predicted_price: boolean
    pred_first_breakpoint: number
    pred_second_breakpoint: number
    pred_min_price: number
    pred_max_price: number
    comfort_features: number[]
}

export interface ISearch {
    sorter: number | null;
    forRent: boolean | null;
    manufacturer: string | null;
    category: string | null;
    priceFloor: number | null;
    priceCeiling: number | null;
    period: Period | null;
}

export interface IStore {
    products: IProduct[];
    search: ISearch;
}

export const product: IProduct = {
    "car_id":91568458,
    "status_id":1,
    "user_id":3065366,
    "dealer_user_id":0,
    "paid_add":0,
    "photo":"5\/4\/8\/6\/5",
    "pic_number":15,
    "prod_year":2020,
    "prod_month":1,
    "man_id":41,
    "car_model":"ragac modeli gvaqvs aqane simon",
    "price":23500,
    "price_usd":23500,
    "first_deposit":0,
    "price_value":60684,
    "fuel_type_id":2,
    "gear_type_id":2,
    "drive_type_id":3,
    "door_type_id":2,
    "color_id":12,
    "saloon_color_id":16,
    "cylinders":6,
    "car_run":18000,
    "car_run_km":18000,
    "car_run_dim":1,
    "engine_volume":2500,
    "airbags":9,
    "abs":true,
    "esd":true,
    "el_windows":true,
    "conditioner":true,
    "leather":false,
    "disks":true,
    "nav_system":true,
    "central_lock":true,
    "hatch":true,
    "right_wheel":false,
    "alarm":true,
    "board_comp":true,
    "hydraulics":true,
    "chair_warming":true,
    "climat_control":true,
    "obstacle_indicator":true,
    "customs_passed":false,
    "client_name":"khvtiso chokuri",
    "client_phone":995557905425,
    "model_id":1128,
    "location_id":15,
    "parent_loc_id":1,
    "tech_inspection":true,
    "checked_for_duplicates":false,
    "order_number":20,
    "stickers":null,
    "changable":false,
    "auction":false,
    "has_turbo":false,
    "for_rent":false,
    "rent_daily":false,
    "rent_purchase":false,
    "rent_insured":false,
    "rent_driver":false,
    "currency_id":1,
    "vehicle_type":0,
    "category_id":5,
    "vin":"",
    "user_type":null,
    "prom_color":0,
    "special_persons":false,
    "back_camera":true,
    "car_desc":"avtomobili aris idialur mdgomareobashi titis dadeba ar unda chamovoda minimaluri dazianebit shecvlilia mxolod erti kari originalit ",
    "order_date":"2023-05-30 20:41:00",
    "video_url":"",
    "hp":0,
    "hours_used":0,"photo_ver":3,"checked":true,"lang_type_id":4,"el_starter":0,"start_stop":true,"trunk":false,"windshield":false,"inspected_in_greenway":false,"license_number":"","words_checked":1,"is_payd":true,"condition_type_id":0,"primary_damage_type":0,"secondary_damage_type":0,"auction_has_key":0,"is_auction":0,"saloon_material_id":1,"map_lat":0,"map_long":0,"zoom":0,"predicted_price":"76611.6764","hdd":0,"map_title":"","has_catalyst":1,"tmp":"146.255.226.194","views":165,"dealerId":null,"has_logo":null,"logo_ver":null,"active_ads":null,"dealer_title":null,"has_predicted_price":true,"pred_first_breakpoint":68950.50876000068,"pred_second_breakpoint":122578.6822400012,"pred_min_price":41370.30525600041,"pred_max_price":147094.41868800146,"comfort_features":[6,44,11,20,12,30,31,7,8,38,28,29,9,10,23,15]}