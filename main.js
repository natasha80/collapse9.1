(()=>{"use strict";const t=new class{constructor(t,e){"string"==typeof t&&(t=document.querySelector(t)),this.element=t,this.content=e,this.button=this.element.querySelector(".collapse__button"),this.bindToDOM=this.bindToDOM.bind(this),this.collapse=this.collapse.bind(this)}bindToDOM(){const t=document.createElement("div");t.classList.add("collaps__description");const e=document.createElement("p");e.classList.add("collaps__description-text"),t.appendChild(e),t.style.maxHeight=0,e.textContent=this.content,this.element.appendChild(t),this.button.addEventListener("click",this.collapse)}collapse(t){t.preventDefault();const e=this.element.querySelector(".collaps__description");e.classList.toggle("active"),e.classList.contains("active")?e.style.maxHeight=`calc(${e.scrollHeight}px + 25px)`:e.style.maxHeight=0}}(".collapse","Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.");t.bindToDOM();new class{constructor(t){"string"==typeof t&&(t=document.querySelector(t)),this.element=t,this.button=this.element.querySelector(".callback-chat__button"),this.modal=this.element.querySelector(".callback-chat__modal"),this.bindToDOM=this.bindToDOM.bind(this),this.callbackChat=this.callbackChat.bind(this),this.cansel=this.cansel.bind(this),this.modalVisible=this.modalVisible.bind(this)}bindToDOM(){this.button.addEventListener("mouseover",this.modalVisible),this.button.addEventListener("click",this.callbackChat),document.body.appendChild(this.modal)}modalVisible(){this.modal.style.display="block",this.button.removeEventListener("mouseover",this.modalVisible)}callbackChat(){this.button.style.transform="scale(0)",this.modal.classList.remove("hidden"),this.modal.classList.add("active"),this.close=this.modal.querySelector(".callback-chat__modal-btn-close"),this.submit=this.modal.querySelector(".callback-chat__modal-btn-send"),this.close.addEventListener("click",this.cansel),this.submit.addEventListener("click",this.cansel)}cansel(){this.modal.classList.add("hidden"),this.modal.classList.remove("active"),this.button.style.transform="scale(1)",this.close.removeEventListener("click",this.cansel),this.submit.removeEventListener("click",this.cansel)}}(".callback-chat").bindToDOM();new class{constructor(t){"string"==typeof t&&(t=document.querySelector(t)),this.element=t,this.button=this.element.querySelector(".liker__button"),this.like=this.like.bind(this)}bindToDOM(){this.button.addEventListener("click",this.like)}like(t){t.preventDefault();const{target:e}=t,{top:i}=e.getBoundingClientRect(),s=e.getBoundingClientRect().x+.5*e.getBoundingClientRect().width-15,l=document.createElement("div");l.classList.add("like");const n=Math.floor(1+4*Math.random());l.style.animation=`trajectory_${n} 500ms ease-out`,l.style.top=`${i}px`,l.style.left=`${s}px`,this.element.appendChild(l),l.addEventListener("animationend",(()=>l.remove()))}}(".liker").bindToDOM()})();