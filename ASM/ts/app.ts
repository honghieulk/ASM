import {TGiaiTri,THocTap,TLamViec,TNoiBat,TListGiaiTri,TSteam} from "./data.js"
import {listgiaitri_arr,hoctap_arr,lamviec_arr,steam_arr,noibat_arr,giaitri_arr} from "./data.js"

const hien1listgiaitri = (lgt: TListGiaiTri) => {
    return `
            <div class="caption">
                <a href="#!detail/${lgt.id}" class="link">${lgt.name}</a>
                <p class="mt-2"><strong>${lgt.discountprice.toLocaleString()}đ</strong> <strong
                        style="text-decoration: line-through;opacity: 0.3;">${lgt.oriprice.toLocaleString}}đ</strong>
                    <span class="badge bg-danger">${(lgt.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
`;
}
export const show1listgiaitri = () => {
    const html_arr = listgiaitri_arr.map(hien1listgiaitri);
    return html_arr.join("");
}
const hien1NoiBat = (nb: TNoiBat) => {
    return `
        <div class="col-sm-3">
            <a href="#!detail/${nb.id}"><img src="${nb.image}" class="d-block w-100 rounded"></a>
            <div class="caption">
                <a href="#!detail/${nb.id}" class="link">${nb.name}</a>
                <p class="mt-2">
                    <strong>${nb.discountprice.toLocaleString()}đ</strong>
                    <strong style="text-decoration: line-through; opacity: 0.3;">${nb.oriprice.toLocaleString()}đ</strong>
                    <span class="badge bg-danger">${(nb.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
        </div>`;
}
export const showlistnoibat = () => {
    const html_arr = noibat_arr.map(hien1NoiBat);
    return html_arr.join("");
}
const hien1Steam = (st: TSteam) => {
    return `
    <div class="col-sm-3">
            <a href="#!"><img src="${st.image}" class="d-block w-100 rounded"></a>
            <div class="caption">
                <a href="#!" class="link">${st.name}</a>
                <p class="mt-2">
                    <strong>${st.discountprice.toLocaleString()}đ</strong>
                    <strong style="text-decoration: line-through; opacity: 0.3;">${st.oriprice.toLocaleString()}đ</strong>
                    <span class="badge bg-danger">${(st.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
        </div>
    `;
}
export const showliststeam = () => {
    const html_arr = steam_arr.map(hien1Steam);
    return html_arr.join("");
}
const hien1HocTap = (ht: THocTap) => {
    return`
    <div class="col-sm-3">
            <a href="#!"><img src="${ht.image}" class="d-block w-100 rounded"></a>
            <div class="caption">
                <a href="#!" class="link">${ht.name}</a>
                <p class="mt-2">
                    <strong>${ht.discountprice.toLocaleString()}đ</strong>
                    <strong style="text-decoration: line-through; opacity: 0.3;">${ht.oriprice.toLocaleString()}đ</strong>
                    <span class="badge bg-danger">${(ht.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
        </div>
    `;
}
export const showlisthoctap = () => {
    const html_arr = hoctap_arr.map(hien1HocTap);
    return html_arr.join("");
}
const hien1GiaiTri = (gt: TGiaiTri) => {
    return `
        <div class="col-sm-3">
            <a href="#!"><img src="${gt.image}" class="d-block w-100 rounded"></a>
            <div class="caption">
                <a href="#!" class="link">${gt.name}</a>
                <p class="mt-2">
                    <strong>${gt.discountprice.toLocaleString()}đ</strong>
                    <strong style="text-decoration: line-through; opacity: 0.3;">${gt.oriprice.toLocaleString()}đ</strong>
                    <span class="badge bg-danger">${(gt.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
        </div>`;
}
export const showlistgiaitri = () => {
    const html_arr = giaitri_arr.map(hien1GiaiTri);
    return html_arr.join("");
}
const hien1LamViec = (lv: TLamViec) => {
    return `
        <div class="col-sm-3">
            <a href="#!"><img src="${lv.image}" class="d-block w-100 rounded"></a>
            <div class="caption">
                <a href="#!" class="link">${lv.name}</a>
                <p class="mt-2">
                    <strong>${lv.discountprice.toLocaleString()}đ</strong>
                    <strong style="text-decoration: line-through; opacity: 0.3;">${lv.oriprice.toLocaleString()}đ</strong>
                    <span class="badge bg-danger">${(lv.discount * 100).toFixed(0)}%</span>
                </p>
            </div>
        </div>`;
}
export const showlistlamviec = () => {
    const html_arr = lamviec_arr.map(hien1LamViec);
    return html_arr.join("");
}