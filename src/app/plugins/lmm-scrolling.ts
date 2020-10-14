export class LmmScrolling {
  constructor(){}


  lmmRailAnimation(component){
    var div = this.animation(component);
    return div

  }

  animation(elem){
    var elementText = document.querySelector(elem).innerText;
    var element = document.querySelector(elem)
    var tex = element.cloneNode(true)
    element.innerHTML = '<div class="lmm_rail_conatiner"><div class="lmm_rail_upper"><div class="lmm_rail_inner"><div class="lmm_rail_text">'+elementText+'</div><div class="lmm_rail_text">'+elementText+'</div><div class="lmm_rail_text">'+elementText+'</div><div class="lmm_rail_text">'+elementText+'</div></div></div></div>';
    const container = document.querySelector('.lmm_rail_conatiner');
    const upper = document.querySelectorAll('.lmm_rail_upper');
    const inner = document.querySelector('.lmm_rail_inner');
    const text = document.querySelector('.lmm_rail_text');
    let elementWidth = text.clientWidth - 70;

    console.log(document.querySelector('.lmm_rail_text').clientWidth - 70);
  }
}
