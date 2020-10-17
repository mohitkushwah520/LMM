import { Component, OnInit } from '@angular/core';
import { FormControl ,FormBuilder, FormArray, Validators }from '@angular/forms'
import { from } from 'rxjs';
import { ContactService }from '../../services/contact.service';
// import { lmmFormAnimation}from '../../../assets/js/lmmform.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public servicsContent = [{id:1,name:'design'},{id:2,name :'branding'},{id:3 , name:'marketing'},{id : 4 , name : 'apps'},{id : 5 ,name : 'website'}]
  public products = [{id:1,name:'loud AR'},{id:2,name :'loud CAM'}]
  public hire = [{id:1,name:'hire me'}]

  get name(){ return this.contactform.get('name') };
  get email(){ return this.contactform.get('email') };
  get companyName(){ return this.contactform.get('companyName') };
  get phoneNumber(){ return this.contactform.get('phoneNumber') };

  constructor(private fb : FormBuilder ,private _contactService : ContactService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.lmmAnimation(window)
    }, 1000);
  }

  contactform = this.fb.group({
    name : ['',Validators.required],
    email : ['',[Validators.required , Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$")]],
    companyName : [''],
    phoneNumber : ['',[Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    message : [''],
    services : this.fb.array([])
  })

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.contactform.controls.services;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }
  onSubmit(){
    console.log(this.contactform.value)
    this._contactService.contactform(this.contactform.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }




  lmmAnimation( window ) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    // if ( typeof define === 'function' && define.amd ) {
    //   // AMD
    //   define( classie );
    // } else {
    //   // browser global
    //   window.classie = classie;
    // }

      // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
      if (!String.prototype.trim) {
          (function() {
              // Make sure we trim BOM and NBSP
              var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
              String.prototype.trim = function() {
                  return this.replace(rtrim, '');
              };
          })();
      }

      [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
              classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
      } );

      function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
      }

      function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
              classie.remove( ev.target.parentNode, 'input--filled' );
          }
      }
    }


}
