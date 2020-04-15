export default {
  firstName:{
    firstName:{value:'Charlie', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:'', required:true},
    lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:'',  required:false},
    email:{value:'', errors:[], type:'email', label:'Email', id:'email', placeholder:'', required:true},
    phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:'',  required:false},
    age:{value:'', errors:[], type:'number', label:'Age', id:'age', placeholder:'',  required:false},
    date:{value:'', errors:[], type:'date', label:'Date', id:'date', placeholder:'',  required:false}
  },
  validForm:{
    firstName:{value:'Charlie', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:'', required:true},
    lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:'',  required:false},
    email:{value:'aaa@g.com', errors:[], type:'email', label:'Email', id:'email', placeholder:'', required:true},
    phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:'',  required:false},
    age:{value:'', errors:[], type:'number', label:'Age', id:'age', placeholder:'',  required:false},
    date:{value:'', errors:[], type:'date', label:'Date', id:'date', placeholder:'',  required:false}
  },
  invalidForm:{
    firstName:{value:'Charlie', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:'', required:true},
    lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:'',  required:false},
    email:{value:'aaa', errors:[], type:'email', label:'Email', id:'email', placeholder:'', required:true},
    phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:'',  required:false},
    age:{value:'', errors:[], type:'number', label:'Age', id:'age', placeholder:'',  required:false},
    date:{value:'', errors:[], type:'date', label:'Date', id:'date', placeholder:'',  required:false}
  },
  invalidFormExpected:{
    firstName:{value:'Charlie', errors:[], type:'text', label:'First Name', id:'firstName', placeholder:'', required:true},
    lastName:{value:'', errors:[], type:'text', label:'Last Name', id:'lastName', placeholder:'',  required:false},
    email:{value:'aaa', errors:['Needs "@" symbol for email', 'Needs "." symbol for email'], type:'email', label:'Email', id:'email', placeholder:'', required:true},
    phone:{value:'', errors:[], type:'tel', label:'Phone', id:'phone', placeholder:'',  required:false},
    age:{value:'', errors:[], type:'number', label:'Age', id:'age', placeholder:'',  required:false},
    date:{value:'', errors:[], type:'date', label:'Date', id:'date', placeholder:'',  required:false}
  }
}