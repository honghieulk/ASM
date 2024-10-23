type TGiaiTri = { id: number, spid: string, image: string, name: string, discountprice: number, oriprice: number, discount: number, masp: string }
type THocTap = { id: number, spid: string, image: string, name: string, discountprice: number, oriprice: number, discount: number, masp: string }
type TLamViec = { id: number, spid: string, image: string, name: string, discountprice: number, oriprice: number, discount: number, masp: string }
type TSteam = { id: number, spid: string, image: string, name: string, discountprice: number, oriprice: number, discount: number, masp: string }
type TNoiBat = { id: number, spid: string, image: string, name: string, discountprice: number, oriprice: number, discount: number, masp: string }
const giaitri_arr: TGiaiTri[] = [
    { id: 29, spid: "Netflix",masp:"acc netflix 1",image: "images/nb1.jpg", name: "Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD", discountprice: 99000, oriprice: 260000, discount: 0.62 },
    { id: 30, spid: "Spotify",masp:"acc spotify 365",image: "images/nb2.jpg", name: "Gói gia hạn Spotify Premium 01 năm", discountprice: 299000, oriprice: 590000, discount: 0.49 },
    { id: 31, spid: "Youtube",masp:"acc youtube 6",image: "images/gt1.png", name: "Gia hạn YouTube Premium + YouTube Music (6 tháng)", discountprice: 259000, oriprice: 3360000, discount: 0.92 },
    { id: 32, spid: "Youtube",masp:"acc youtube 365",image: "images/gt2.jpg", name: "Gia hạn YouTube Premium + YouTube Music (1 Năm)", discountprice: 75000, oriprice: 6720000, discount: 0.93 },
    { id: 33, spid: "Tidal",masp:"acc tidal hifi plus 1",image: "images/gt3.png", name: "Tài khoản nghe nhạc Tidal HiFi Plus (1 Tháng)", discountprice: 19000, oriprice: 550000, discount: 0.97 },
    { id: 34, spid: "Office",masp:"office 365 1TB",image: "images/gt4.jpg", name: "Gói nâng cấp Office 365 1 năm (1TB)", discountprice: 249000, oriprice: 1299000, discount: 0.81 },
    { id: 35, spid: "Youtube",masp:"acc youtube 1",image: "images/gt5.png", name: "Gia hạn YouTube Premium + YouTube Music (1 Tháng)", discountprice: 35000, oriprice: 280000, discount: 0.87 },
    { id: 36, spid: "Youtube",masp:"acc youtube 2",image: "images/gt6.png", name: "Gia hạn Youtube Premium (2 Tháng)", discountprice: 75000, oriprice: 560000, discount: 0.87 }
]
const hoctap_arr: THocTap[] = [
    { id: 37, spid: "Grammarly", masp: "acc grammarly 1", image: "images/ht1.jpg", name: "Tài khoản Grammarly Premium 1 năm", discountprice: 490000, oriprice: 1500000, discount: 0.67 },
    { id: 38, spid: "Lynda", masp: "acc lynda forever", image: "images/ht2.png", name: "Tài khoản Lynda Premium vĩnh viễn", discountprice: 290000, oriprice: 1500000, discount: 0.81 },
    { id: 39, spid: "Skillshare", masp: "acc skillshare 2", image: "images/ht4.jpg", name: "Tài khoản Skillshare premium 2 tháng", discountprice: 59000, oriprice: 320000, discount: 0.82 },
    { id: 40, spid: "Coursera", masp: "course coursera", image: "images/ht3.jpg", name: "Khóa học Coursera", discountprice: 490000, oriprice: 1500000, discount: 0.67 },
    { id: 41, spid: "Busuu", masp: "acc busuu 1", image: "images/ht5.jpg", name: "Tài khoản học ngoại ngữ Busuu Premium Plus 1 Tháng", discountprice: 15000, oriprice: 200000, discount: 0.92 },
    { id: 42, spid: "Duolingo", masp: "acc duolingo 1", image: "images/ht6.png", name: "Tài khoản học ngoại ngữ Duolingo 1 năm", discountprice: 190000, oriprice: 300000, discount: 0.37 },
    { id: 43, spid: "Lumosity", masp: "acc lumosity 1", image: "images/ht7.jpg", name: "Tài khoản Lumosity 1 năm", discountprice: 299000, oriprice: 1100000, discount: 0.73 },
    { id: 44, spid: "Memrise", masp: "acc memrise 1", image: "images/ht8.jpg", name: "Tài khoản học ngoại ngữ Memrise 1 năm", discountprice: 300000, oriprice: 2300000, discount: 0.87 }
];

const lamviec_arr: TLamViec[] = [
    { id: 45, spid: "Windows", masp: "windows 10 pro", image: "images/lv1.jpg", name: "Windows 10 Professional CD Key", discountprice: 290000, oriprice: 400000, discount: 0.28 },
    { id: 46, spid: "Doodly", masp: "acc doodly vinh vien", image: "images/lv2.jpg", name: "Tài khoản Doodly Standard vĩnh viễn", discountprice: 599000, oriprice: 4800000, discount: 0.88 },
    { id: 47, spid: "Malwarebytes", masp: "acc malwarebytes vinh vien", image: "images/lv3.jpg", name: "Key bản quyền diệt virus Malwarebytes vĩnh viễn", discountprice: 599000, oriprice: 1500000, discount: 0.60 },
    { id: 48, spid: "Office", masp: "office 2019 pro", image: "images/lv4.jpg", name: "Microsoft Office 2019 Professional Plus for Windows", discountprice: 540000, oriprice: 9500000, discount: 0.94 },
    { id: 49, spid: "Turnitin", masp: "turnitin 6 thang", image: "images/lv5.jpg", name: "Gói nâng cấp Turnitin (6 Tháng)", discountprice: 629000, oriprice: 839000, discount: 0.25 },
    { id: 50, spid: "AutoCAD", masp: "autocad 365", image: "images/lv6.jpg", name: "Nâng cấp AutoCAD (1 năm)", discountprice: 390000, oriprice: 43800000, discount: 0.99 },
    { id: 51, spid: "Autodesk", masp: "autodesk app 365", image: "images/lv7.jpg", name: "Nâng cấp 1 App Autodesk (1 năm)", discountprice: 390000, oriprice: 41950000, discount: 0.99 },
    { id: 52, spid: "Canva", masp: "canva 365", image: "images/lv8.jpg", name: "Gói gia hạn Canva 1 năm", discountprice: 300000, oriprice: 1500000, discount: 0.80 }
];

const noibat_arr: TNoiBat[] = [
    { id: 21, image: "images/nb1.jpg", name: "Tài Khoản Netflix Premium 1 tháng - Xem phim chất lượng 4k và Full HD", discountprice: 99000, oriprice: 260000, discount: 0.62, spid: "Netflix", masp: "acc netflix 1" },
    { id: 22, image: "images/nb2.jpg", name: "Gói gia hạn Spotify Premium 01 năm", discountprice: 299000, oriprice: 590000, discount: 0.49, spid: "Spotify", masp: "acc spotify 1" },
    { id: 23, image: "images/nb3.jpg", name: "Nâng cấp Tài khoản Zoom Pro 1 tháng", discountprice: 210000, oriprice: 350000, discount: 0.40, spid: "Zoom Pro", masp: "acc zoom pro 1" },
    { id: 24, image: "images/dm11.png", name: "Tài khoản Netflix Premium for 1 User (20 Ngày)", discountprice: 59000, oriprice: 59000, discount: 0, spid: "Netflix", masp: "acc netflix 3" },
    { id: 25, image: "images/nb5.jpg", name: "Gia hạn YouTube Premium + YouTube Music (1 Năm)", discountprice: 497000, oriprice: 6720000, discount: 0.93, spid: "Youtube", masp: "acc youtube 1" },
    { id: 12, image: "images/dm10.jpg", name: "GearUp Booster giảm lag khi chơi game (Windows - 12 Tháng)", discountprice: 417000, oriprice: 432000, discount: 0.03, spid: "Gearup", masp: "acc gearup 2" },
    { id: 27, image: "images/dm18.png", name: "Tài khoản nghe nhạc Spotify Premium (4 tháng)", discountprice: 79000, oriprice: 236000, discount: 0.67, spid: "Spotify", masp: "acc spotify 4" },
    { id: 28, image: "images/nb8.jpg", name: "Tài khoản Grammarly Premium 1 năm", discountprice: 490000, oriprice: 1500000, discount: 0.67, spid: "Grammaly Premium", masp: "acc grammaly premium 1" }
]
const steam_arr: TSteam[] = [
    { id: 53, spid: "Steam", masp: "random code steam", image: "images/st1.png", name: "Random Code Steam", discountprice: 9000, oriprice: 20000, discount: 0.55 },
    { id: 54, spid: "Elden Ring", masp: "eldent ring cd key", image: "images/st2.jpg", name: "Elden Ring (CD Key Steam)", discountprice: 790000, oriprice: 800000, discount: 0.1 },
    { id: 55, spid: "GTA V", masp: "gta 5 account", image: "images/st3.jpg", name: "Tài khoản Grand Theft Auto V: Premium Edition (GTA 5)", discountprice: 250000, oriprice: 459000, discount: 0.46 },
    { id: 56, spid: "Steam", masp: "random code steam legendary", image: "images/st4.png", name: "Random Code Steam Legendary", discountprice: 60000, oriprice: 150000, discount: 0.60 },
    { id: 57, spid: "Devil May Cry", masp: "devil may cry 5", image: "images/st5.jpg", name: "Devil May Cry 5 - 1000000 Red Orbs", discountprice: 276000, oriprice: 276000, discount: 0 },
    { id: 58, spid: "The Office Quest", masp: "the office quest", image: "images/st6.jpg", name: "The Office Quest", discountprice: 109000, oriprice: 109000, discount: 0 },
    { id: 59, spid: "Brawlhalla", masp: "brawlhalla iron legion bundle", image: "images/st7.jpg", name: "Brawlhalla - Iron Legion Bundle", discountprice: 29000, oriprice: 39000, discount: 0.26 },
    { id: 60, spid: "Wallpaper Engine", masp: "wallpaper engine", image: "images/st8.jpg", name: "Wallpaper Engine", discountprice: 70000, oriprice: 70000, discount: 0 }
];

export {TGiaiTri,THocTap,TLamViec,TNoiBat,TSteam}
export {hoctap_arr,lamviec_arr,steam_arr,noibat_arr,giaitri_arr}