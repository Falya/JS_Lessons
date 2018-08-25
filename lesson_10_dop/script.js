window.addEventListener('DOMContentLoaded', function () {
    // Объявляю 2 инпута, один readOnly в него мы просто будем записывать значение из друго инпута
let input = document.querySelector('#mask'),
		show = document.querySelector('#show');
        show.readOnly = true;
        show.value = input.value;
        input.style.opacity = '0';
        show.style.cssText = 'position: absolute; left: 0;';
// Функция для выставления курсора всегда в конец строки
		function setCursorPosition(pos, elem,event) {
			elem.focus();
			console.log("elem.focus()" + !elem.focus() );
			 if (elem.setSelectionRange) {
			 	elem.setSelectionRange(pos, pos);
			 }
    else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
		}
}
// Сама маска
function mask(event) {
    let matrix = "+375 (__) ___-__-__",
        i = 0,
        b = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
   
    	 this.value = matrix.replace(/./g, function(a) {
    	
                        console.log("val.length", val.length);
// Если есть _ и число и номер символа меньше длинны строки, то возвращаем следующий символ
// или если номер символа больше длины строки и меньше длины маски, то  (__) ___ __ __
// Или если нажали на backspace, то возвращаем пустую строчку
// Иначе просто возвращаем входной сивол
    	 		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length && matrix.lengtth >= i ? "(__) ___ __ __" : event.key=="Backspace" && !isNaN(val.charAt(i)) ? '' : a
    
    });
   
    if (event.type == "blur") {
        if (this.value.length == 4) 
        	this.value = "+375 (__) ___-__-__";
        show.style.boxShadow = '';
        show.style.border = '';
    }  else {
        setCursorPosition((this.value.length), this, event)
            show.value = this.value;
        }

};  
    show.addEventListener('click', () => {
        input.focus();
        show.style.boxShadow = '0 0 3px green';
        show.style.border = '1px solid green';
    });
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);



});
