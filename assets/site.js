'use strict';
const month=document.querySelector('#month');
const kind=document.querySelector('#kind');
if(month&&kind){
 const rows=[...document.querySelectorAll('#odour-table tbody tr')];
 function filter(){let count=0;for(const row of rows){row.hidden=!((month.value==='all'||row.dataset.month===month.value)&&(kind.value==='all'||row.dataset.kind===kind.value));if(!row.hidden)count++;}document.querySelector('#result-count').textContent=`$98 observation${count===1?'':'s'}`;document.querySelector('#empty').hidden=count!==0;}
 month.addEventListener('change',filter);kind.addEventListener('change',filter);
}
