import"./assets/styles-f3635d75.js";import{i}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(r){r.preventDefault();const t=document.querySelector('input[name="state"]:checked'),o=t?t.value:null;if(!o){i.error({title:"Error",message:"Please select a state",position:"topRight"});return}const s=parseInt(this.elements.delay.value);new Promise((e,l)=>{setTimeout(()=>{o==="fulfilled"?e(s):l(s)},s)}).then(e=>{i.success({title:"Fulfilled promise",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Rejected promise",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}).finally(()=>{t&&(t.checked=!1),this.reset()})});
//# sourceMappingURL=commonHelpers2.js.map