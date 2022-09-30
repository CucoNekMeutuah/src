//pop-up konfirmasi pembayaran
const _0x3060c0 = _0x2e69;
(function(saveNotifs, data) {
  const toMonths = _0x2e69;
  const params = saveNotifs();
  for (; !![];) {
    try {
      const lastScriptData = parseInt(toMonths(207)) / 1 * (-parseInt(toMonths(185)) / 2) + parseInt(toMonths(186)) / 3 + -parseInt(toMonths(214)) / 4 + parseInt(toMonths(205)) / 5 * (-parseInt(toMonths(191)) / 6) + -parseInt(toMonths(203)) / 7 + -parseInt(toMonths(199)) / 8 * (parseInt(toMonths(219)) / 9) + parseInt(toMonths(204)) / 10;
      if (lastScriptData === data) {
        break;
      } else {
        params["push"](params["shift"]());
      }
    } catch (_0x585183) {
      params["push"](params["shift"]());
    }
  }
})(_0x4d4a, 757609);
const popupKonfirmasiPembelian = document[_0x3060c0(188)](".popup-konfirmasi-pembelian");
const cardKonfirmasiPembelian = document["querySelector"](_0x3060c0(222));
const phoneNumber = document[_0x3060c0(190)](_0x3060c0(196));
document[_0x3060c0(190)](_0x3060c0(213));
function _0x4d4a() {
  const _0x1fc8e4 = ["value", ".konfirmasi-total-pembayaran", "body", "6252617xKtZbQ", "41257630lPkHUS", "25KitnJn", "removeAttribute", "852103FyVfSX", "split", "addEventListener", "replaceAll", ".btn-konfirmasi-pembelian", "add", "zone", "3801324JEqzXh", "click", "querySelectorAll", "classList", "toLocaleString", "4093434HAUqtS", "contains", "join", ".card-konfirmasi-pembelian", ".konfirmasi-nominal", ".konfirmasi-harga-product", "2SMfLFg", "2224044JsKQyr", "textContent", "querySelector", "popup-konfirmasi-pembelian", 
  "getElementById", "605022QSGLAp", "target", ".konfirmasi-tipe-produk", "href", "?catatan=", "nomor-telepon", "show", "remove", "16oHvOxA"];
  _0x4d4a = function() {
    return _0x1fc8e4;
  };
  return _0x4d4a();
}
function closePopupPurchaseConfirmation() {
  const fromNumber = _0x3060c0;
  if (popupKonfirmasiPembelian[fromNumber(217)][fromNumber(220)](fromNumber(197)) && cardKonfirmasiPembelian[fromNumber(217)][fromNumber(220)](fromNumber(197))) {
    popupKonfirmasiPembelian[fromNumber(217)][fromNumber(198)](fromNumber(197));
    cardKonfirmasiPembelian["classList"][fromNumber(198)](fromNumber(197));
  } else {
    popupKonfirmasiPembelian[fromNumber(217)]["add"](fromNumber(197));
    cardKonfirmasiPembelian[fromNumber(217)][fromNumber(212)](fromNumber(197));
  }
}
function _0x2e69(threshold, limit) {
  const relativeTimeThresholds = _0x4d4a();
  return _0x2e69 = function(threshold, limit) {
    threshold = threshold - 183;
    let _0x5ddbac = relativeTimeThresholds[threshold];
    return _0x5ddbac;
  }, _0x2e69(threshold, limit);
}
document[_0x3060c0(209)](_0x3060c0(215), function(map) {
  const parseInt = _0x3060c0;
  if (map["target"][parseInt(217)]["contains"](parseInt(189)) || map[parseInt(192)][parseInt(217)][parseInt(220)]("btn-konfirmasi-pembelian--ubah")) {
    closePopupPurchaseConfirmation();
  }
});
function purchaseConfirmation(tokens, value, c) {
  const prefixed = _0x3060c0;
  const style = document["querySelector"](".konfirmasi-nomor-tujuan");
  const conditions = document["querySelector"](prefixed(183));
  const outputs = document[prefixed(188)](prefixed(193));
  const resources = document[prefixed(188)](prefixed(184));
  const comment = "Rp" + parseInt(c)[prefixed(218)]()[prefixed(210)](",", ".");
  style[prefixed(187)] = tokens["split"](" ")[prefixed(221)]("");
  conditions[prefixed(187)] = comment;
  resources[prefixed(187)] = comment;
  outputs[prefixed(187)] = value;
  const comments = document[prefixed(188)](prefixed(201));
  comments[prefixed(187)] = comment;
}
function purchase(productId, transactionId, callback) {
  const chat = _0x3060c0;
  document[chat(202)][chat(206)]("style");
  const valueProgess = productId + chat(195) + phoneNumber[chat(200)];
  closePopupPurchaseConfirmation();
  const currentChr = callback[chat(208)]("Rp")[chat(221)]("")[chat(210)](".", "");
  purchaseConfirmation(phoneNumber[chat(200)], transactionId, currentChr);
  btnPurchaseProduct(valueProgess);
}
function btnPurchaseProduct(a) {
  const prefixed = _0x3060c0;
  const window = document[prefixed(216)](prefixed(211))[1];
  window[prefixed(209)](prefixed(215), function() {
    const d3_vendorSymbol = prefixed;
    window[d3_vendorSymbol(194)] = a;
  });
}
;
