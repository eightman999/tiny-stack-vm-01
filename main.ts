import{mkdirSync as M,readdirSync as R,readFileSync as Q,writeFileSync as W}from'node:fs';
import{join as J}from'node:path';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
const H={0:0,1:101,2:401,3:10,4:12,5:22,6:23,7:33,16:21,17:21,18:21,19:21,20:21,21:21,22:21,23:11,24:21,25:21,26:21,27:11,28:21,29:21,30:21,32:21,33:21,34:21,48:200,49:210,50:210,51:200,52:0,64:11,65:20,80:10,81:10,82:1,83:10};
function E(g,s){
const l=g.length,d=new Int32Array(256),t=new Int32Array(64),m=new Int32Array(256),e=new Uint8Array(65536);
let p=0,j=0,n=0,y=0,c=0,u=0;
const F=k=>({bytes:e.slice(0,n),code:k});
for(;;){
if(u===1e6)return F(10);
if(c<0||c>=l)return F(9);
const o=g[c],h=H[o];
if(h===void 0)return F(5);
const im=h/100|0,v=h%100;
if(c+im>=l)return F(9);
u+=1;
const x=c+1+im;
if(p<(v/10|0))return F(2);
if(p-(v/10|0)+v%10>256)return F(3);
c=x;
switch(o){
case 0:return F(0);
case 1:d[p++]=(g[x-1]<<24)>>24;break;
case 2:d[p++]=g[x-4]|g[x-3]<<8|g[x-2]<<16|g[x-1]<<24;break;
case 3:p-=1;break;
case 4:d[p]=d[p-1];p+=1;break;
case 5:{const w=d[p-2];d[p-2]=d[p-1];d[p-1]=w;break}
case 6:d[p]=d[p-2];p+=1;break;
case 7:{const w=d[p-3];d[p-3]=d[p-2];d[p-2]=d[p-1];d[p-1]=w;break}
case 23:d[p-1]=-d[p-1]|0;break;
case 27:d[p-1]=~d[p-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
const b=d[p-1],a=d[p-2];
let r;
switch(o){
case 16:r=a+b|0;break;
case 17:r=a-b|0;break;
case 18:r=Math.imul(a,b);break;
case 19:if(b===0)return F(4);r=a/b|0;break;
case 20:if(b===0)return F(4);r=a%b|0;break;
case 21:if(b===0)return F(4);r=Math.floor((a>>>0)/(b>>>0))|0;break;
case 22:if(b===0)return F(4);r=(a>>>0)%(b>>>0)|0;break;
case 24:r=a&b;break;
case 25:r=a|b;break;
case 26:r=a^b;break;
case 28:r=a<<(b&31);break;
case 29:r=a>>(b&31);break;
case 30:r=a>>>(b&31)|0;break;
case 32:r=a===b?1:0;break;
case 33:r=a<b?1:0;break;
default:r=(a>>>0)<(b>>>0)?1:0;
}
p-=1;d[p-1]=r;break}
case 48:case 49:case 50:{
const f=(g[x-2]|g[x-1]<<8)<<16>>16;
let k=o===48;
if(!k){const q=d[--p];k=o===49?q===0:q!==0}
if(k)c=x+f;
break}
case 51:if(j===64)return F(7);t[j++]=x;c=g[x-2]|g[x-1]<<8;break;
case 52:if(j===0)return F(8);c=t[--j];break;
case 64:{const a=d[p-1];if(a<0||a>=256)return F(6);d[p-1]=m[a];break}
case 65:{const a=d[p-1];if(a<0||a>=256)return F(6);p-=2;m[a]=d[p];break}
case 80:{const w=String(d[p-1]);if(n+w.length>65536)return F(11);p-=1;for(let k=0;k<w.length;k+=1)e[n++]=w.charCodeAt(k);break}
case 81:if(n===65536)return F(11);e[n++]=d[--p]&255;break;
case 82:d[p++]=y<s.length?s[y++]:-1;break;
case 83:return F(d[--p]&255);
}
}
}
for(const i of R(I).sort()){
const g=Q(J(I,i,'program.bin')),s=Q(J(I,i,'input.bin')),r=E(g,s),D=J(O,i);
M(D,{recursive:!0});
W(J(D,'stdout.bin'),r.bytes);
W(J(D,'exit.txt'),r.code+'\n');
}
