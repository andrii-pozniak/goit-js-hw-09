function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequire7bc7;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=u);var i=u("eWCmQ");const l={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector("button")};function r(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3,i={position:e,delay:t};setTimeout((()=>{u?n(i):(o(i),console.log(t))}),t)}))}l.submitBtn.addEventListener("click",(t=>{t.preventDefault();let n=Number(l.inputAmount.value),o=Number(l.inputDelay.value),u=Number(l.inputStep.value);for(let t=1;t<=n;t+=1)console.log("step",u),console.log("delay",o),r(t,o).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),o+=u}));
//# sourceMappingURL=03-promises.bd40e66d.js.map
