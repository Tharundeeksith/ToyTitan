/*!pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib)*/!(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).pako={}));})(this,function(t){"use strict";function e(t){let e=t.length;for(;--e>=0;)t[e]=0;}
const a=256,i=286,n=30,s=15,r=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),l=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),o=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),h=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d=new Array(576);e(d);const _=new Array(60);e(_);const f=new Array(512);e(f);const c=new Array(256);e(c);const u=new Array(29);e(u);const w=new Array(n);function b(t,e,a,i,n){(this.static_tree=t),(this.extra_bits=e),(this.extra_base=a),(this.elems=i),(this.max_length=n),(this.has_stree=t&&t.length);}
let g,p,m;function k(t,e){(this.dyn_tree=t),(this.max_code=0),(this.stat_desc=e);}
e(w);const v=t=>(t<256?f[t]:f[256+(t>>>7)]),y=(t,e)=>{(t.pending_buf[t.pending++]=255&e),(t.pending_buf[t.pending++]=(e>>>8)&255);},x=(t,e,a)=>{t.bi_valid>16-a?((t.bi_buf|=(e<<t.bi_valid)&65535),y(t,t.bi_buf),(t.bi_buf=e>>(16-t.bi_valid)),(t.bi_valid+=a-16)):((t.bi_buf|=(e<<t.bi_valid)&65535),(t.bi_valid+=a));},z=(t,e,a)=>{x(t,a[2*e],a[2*e+1]);},A=(t,e)=>{let a=0;do{(a|=1&t),(t>>>=1),(a<<=1);}while(--e>0);return a>>>1;},E=(t,e,a)=>{const i=new Array(16);let n,r,l=0;for(n=1;n<=s;n++)i[n]=l=(l+a[n-1])<<1;for(r=0;r<=e;r++){let e=t[2*r+1];0!==e&&(t[2*r]=A(i[e]++,e));}},R=t=>{let e;for(e=0;e<i;e++)t.dyn_ltree[2*e]=0;for(e=0;e<n;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;(t.dyn_ltree[512]=1),(t.opt_len=t.static_len=0),(t.last_lit=t.matches=0);},Z=t=>{t.bi_valid>8?y(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),(t.bi_buf=0),(t.bi_valid=0);},U=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||(t[n]===t[s]&&i[e]<=i[a]);},S=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&U(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!U(e,i,t.heap[n],t.depth));)
(t.heap[a]=t.heap[n]),(a=n),(n<<=1);t.heap[a]=i;},D=(t,e,i)=>{let n,s,o,h,d=0;if(0!==t.last_lit)
do{(n=(t.pending_buf[t.d_buf+2*d]<<8)|t.pending_buf[t.d_buf+2*d+1]),(s=t.pending_buf[t.l_buf+d]),d++,0===n?z(t,s,e):((o=c[s]),z(t,o+a+1,e),(h=r[o]),0!==h&&((s-=u[o]),x(t,s,h)),n--,(o=v(n)),z(t,o,i),(h=l[o]),0!==h&&((n-=w[o]),x(t,n,h)));}while(d<t.last_lit);z(t,256,e);},T=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,r=e.stat_desc.elems;let l,o,h,d=-1;for(t.heap_len=0,t.heap_max=573,l=0;l<r;l++)
0!==a[2*l]?((t.heap[++t.heap_len]=d=l),(t.depth[l]=0)):(a[2*l+1]=0);for(;t.heap_len<2;)
(h=t.heap[++t.heap_len]=d<2?++d:0),(a[2*h]=1),(t.depth[h]=0),t.opt_len--,n&&(t.static_len-=i[2*h+1]);for(e.max_code=d,l=t.heap_len>>1;l>=1;l--)S(t,a,l);h=r;do{(l=t.heap[1]),(t.heap[1]=t.heap[t.heap_len--]),S(t,a,1),(o=t.heap[1]),(t.heap[--t.heap_max]=l),(t.heap[--t.heap_max]=o),(a[2*h]=a[2*l]+a[2*o]),(t.depth[h]=(t.depth[l]>=t.depth[o]?t.depth[l]:t.depth[o])+1),(a[2*l+1]=a[2*o+1]=h),(t.heap[1]=h++),S(t,a,1);}while(t.heap_len>=2);(t.heap[--t.heap_max]=t.heap[1]),((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,l=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,h=e.stat_desc.max_length;let d,_,f,c,u,w,b=0;for(c=0;c<=s;c++)t.bl_count[c]=0;for(a[2*t.heap[t.heap_max]+1]=0,d=t.heap_max+1;d<573;d++)
(_=t.heap[d]),(c=a[2*a[2*_+1]+1]+1),c>h&&((c=h),b++),(a[2*_+1]=c),_>i||(t.bl_count[c]++,(u=0),_>=o&&(u=l[_-o]),(w=a[2*_]),(t.opt_len+=w*(c+u)),r&&(t.static_len+=w*(n[2*_+1]+u)));if(0!==b){do{for(c=h-1;0===t.bl_count[c];)c--;t.bl_count[c]--,(t.bl_count[c+1]+=2),t.bl_count[h]--,(b-=2);}while(b>0);for(c=h;0!==c;c--)
for(_=t.bl_count[c];0!==_;)
(f=t.heap[--d]),f>i||(a[2*f+1]!==c&&((t.opt_len+=(c-a[2*f+1])*a[2*f]),(a[2*f+1]=c)),_--);}})(t,e),E(a,d,t.bl_count);},O=(t,e,a)=>{let i,n,s=-1,r=e[1],l=0,o=7,h=4;for(0===r&&((o=138),(h=3)),e[2*(a+1)+1]=65535,i=0;i<=a;i++)
(n=r),(r=e[2*(i+1)+1]),(++l<o&&n===r)||(l<h?(t.bl_tree[2*n]+=l):0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):l<=10?t.bl_tree[34]++:t.bl_tree[36]++,(l=0),(s=n),0===r?((o=138),(h=3)):n===r?((o=6),(h=3)):((o=7),(h=4)));},I=(t,e,a)=>{let i,n,s=-1,r=e[1],l=0,o=7,h=4;for(0===r&&((o=138),(h=3)),i=0;i<=a;i++)
if(((n=r),(r=e[2*(i+1)+1]),!(++l<o&&n===r))){if(l<h)
do{z(t,n,t.bl_tree);}while(0!=--l);else
0!==n?(n!==s&&(z(t,n,t.bl_tree),l--),z(t,16,t.bl_tree),x(t,l-3,2)):l<=10?(z(t,17,t.bl_tree),x(t,l-3,3)):(z(t,18,t.bl_tree),x(t,l-11,7));(l=0),(s=n),0===r?((o=138),(h=3)):n===r?((o=6),(h=3)):((o=7),(h=4));}};let F=!1;const L=(t,e,a,i)=>{x(t,0+(i?1:0),3),((t,e,a,i)=>{Z(t),i&&(y(t,a),y(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),(t.pending+=a);})(t,e,a,!0);};var N={_tr_init:t=>{F||((()=>{let t,e,a,h,k;const v=new Array(16);for(a=0,h=0;h<28;h++)
for(u[h]=a,t=0;t<1<<r[h];t++)c[a++]=h;for(c[a-1]=h,k=0,h=0;h<16;h++)
for(w[h]=k,t=0;t<1<<l[h];t++)f[k++]=h;for(k>>=7;h<n;h++)
for(w[h]=k<<7,t=0;t<1<<(l[h]-7);t++)
f[256+k++]=h;for(e=0;e<=s;e++)v[e]=0;for(t=0;t<=143;)(d[2*t+1]=8),t++,v[8]++;for(;t<=255;)(d[2*t+1]=9),t++,v[9]++;for(;t<=279;)(d[2*t+1]=7),t++,v[7]++;for(;t<=287;)(d[2*t+1]=8),t++,v[8]++;for(E(d,287,v),t=0;t<n;t++)
(_[2*t+1]=5),(_[2*t]=A(t,5));(g=new b(d,r,257,i,s)),(p=new b(_,l,0,n,s)),(m=new b(new Array(0),o,0,19,7));})(),(F=!0)),(t.l_desc=new k(t.dyn_ltree,g)),(t.d_desc=new k(t.dyn_dtree,p)),(t.bl_desc=new k(t.bl_tree,m)),(t.bi_buf=0),(t.bi_valid=0),R(t);},_tr_stored_block:L,_tr_flush_block:(t,e,i,n)=>{let s,r,l=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,i=4093624447;for(e=0;e<=31;e++,i>>>=1)
if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])
return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0;})(t)),T(t,t.l_desc),T(t,t.d_desc),(l=(t=>{let e;for(O(t,t.dyn_ltree,t.l_desc.max_code),O(t,t.dyn_dtree,t.d_desc.max_code),T(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*h[e]+1];e--);return(t.opt_len+=3*(e+1)+5+5+4),e;})(t)),(s=(t.opt_len+3+7)>>>3),(r=(t.static_len+3+7)>>>3),r<=s&&(s=r)):(s=r=i+5),i+4<=s&&-1!==e?L(t,e,i,n):4===t.strategy||r===s?(x(t,2+(n?1:0),3),D(t,d,_)):(x(t,4+(n?1:0),3),((t,e,a,i)=>{let n;for(x(t,e-257,5),x(t,a-1,5),x(t,i-4,4),n=0;n<i;n++)
x(t,t.bl_tree[2*h[n]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1);})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,l+1),D(t,t.dyn_ltree,t.dyn_dtree)),R(t),n&&Z(t);},_tr_tally:(t,e,i)=>((t.pending_buf[t.d_buf+2*t.last_lit]=(e>>>8)&255),(t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e),(t.pending_buf[t.l_buf+t.last_lit]=255&i),t.last_lit++,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[2*(c[i]+a+1)]++,t.dyn_dtree[2*v(e)]++),t.last_lit===t.lit_bufsize-1),_tr_align:t=>{x(t,2,3),z(t,256,d),(t=>{16===t.bi_valid?(y(t,t.bi_buf),(t.bi_buf=0),(t.bi_valid=0)):t.bi_valid>=8&&((t.pending_buf[t.pending++]=255&t.bi_buf),(t.bi_buf>>=8),(t.bi_valid-=8));})(t);}};var B=(t,e,a,i)=>{let n=(65535&t)|0,s=((t>>>16)&65535)|0,r=0;for(;0!==a;){(r=a>2e3?2e3:a),(a-=r);do{(n=(n+e[i++])|0),(s=(s+n)|0);}while(--r);(n%=65521),(s%=65521);}
return n|(s<<16)|0;};const C=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)
t=1&t?3988292384^(t>>>1):t>>>1;e[a]=t;}
return e;})());var M=(t,e,a,i)=>{const n=C,s=i+a;t^=-1;for(let a=i;a<s;a++)t=(t>>>8)^n[255&(t^e[a])];return-1^t;},H={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},j={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:K,_tr_stored_block:P,_tr_flush_block:Y,_tr_tally:G,_tr_align:X}=N,{Z_NO_FLUSH:W,Z_PARTIAL_FLUSH:q,Z_FULL_FLUSH:J,Z_FINISH:Q,Z_BLOCK:V,Z_OK:$,Z_STREAM_END:tt,Z_STREAM_ERROR:et,Z_DATA_ERROR:at,Z_BUF_ERROR:it,Z_DEFAULT_COMPRESSION:nt,Z_FILTERED:st,Z_HUFFMAN_ONLY:rt,Z_RLE:lt,Z_FIXED:ot,Z_DEFAULT_STRATEGY:ht,Z_UNKNOWN:dt,Z_DEFLATED:_t}=j,ft=258,ct=262,ut=103,wt=113,bt=666,gt=(t,e)=>((t.msg=H[e]),e),pt=t=>(t<<1)-(t>4?9:0),mt=t=>{let e=t.length;for(;--e>=0;)t[e]=0;};let kt=(t,e,a)=>((e<<t.hash_shift)^a)&t.hash_mask;const vt=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),(t.next_out+=a),(e.pending_out+=a),(t.total_out+=a),(t.avail_out-=a),(e.pending-=a),0===e.pending&&(e.pending_out=0));},yt=(t,e)=>{Y(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),(t.block_start=t.strstart),vt(t.strm);},xt=(t,e)=>{t.pending_buf[t.pending++]=e;},zt=(t,e)=>{(t.pending_buf[t.pending++]=(e>>>8)&255),(t.pending_buf[t.pending++]=255&e);},At=(t,e,a,i)=>{let n=t.avail_in;return(n>i&&(n=i),0===n?0:((t.avail_in-=n),e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?(t.adler=B(t.adler,e,n,a)):2===t.state.wrap&&(t.adler=M(t.adler,e,n,a)),(t.next_in+=n),(t.total_in+=n),n));},Et=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,l=t.nice_match;const o=t.strstart>t.w_size-ct?t.strstart-(t.w_size-ct):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+ft;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),l>t.lookahead&&(l=t.lookahead);do{if(((a=e),h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1])){(s+=2),a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(((i=ft-(f-s)),(s=f-ft),i>r)){if(((t.match_start=e),(r=i),i>=l))break;(c=h[s+r-1]),(u=h[s+r]);}}}while((e=_[e&d])>o&&0!=--n);return r<=t.lookahead?r:t.lookahead;},Rt=t=>{const e=t.w_size;let a,i,n,s,r;do{if(((s=t.window_size-t.lookahead-t.strstart),t.strstart>=e+(e-ct))){t.window.set(t.window.subarray(e,e+e),0),(t.match_start-=e),(t.strstart-=e),(t.block_start-=e),(i=t.hash_size),(a=i);do{(n=t.head[--a]),(t.head[a]=n>=e?n-e:0);}while(--i);(i=e),(a=i);do{(n=t.prev[--a]),(t.prev[a]=n>=e?n-e:0);}while(--i);s+=e;}
if(0===t.strm.avail_in)break;if(((i=At(t.strm,t.window,t.strstart+t.lookahead,s)),(t.lookahead+=i),t.lookahead+t.insert>=3))
for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=kt(t,t.ins_h,t.window[r+1]);t.insert&&((t.ins_h=kt(t,t.ins_h,t.window[r+3-1])),(t.prev[r&t.w_mask]=t.head[t.ins_h]),(t.head[t.ins_h]=r),r++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ct&&0!==t.strm.avail_in);},Zt=(t,e)=>{let a,i;for(;;){if(t.lookahead<ct){if((Rt(t),t.lookahead<ct&&e===W))return 1;if(0===t.lookahead)break;}
if(((a=0),t.lookahead>=3&&((t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1])),(a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h]),(t.head[t.ins_h]=t.strstart)),0!==a&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a)),t.match_length>=3))
if(((i=G(t,t.strstart-t.match_start,t.match_length-3)),(t.lookahead-=t.match_length),t.match_length<=t.max_lazy_match&&t.lookahead>=3)){t.match_length--;do{t.strstart++,(t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1])),(a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h]),(t.head[t.ins_h]=t.strstart);}while(0!=--t.match_length);t.strstart++;}else
(t.strstart+=t.match_length),(t.match_length=0),(t.ins_h=t.window[t.strstart]),(t.ins_h=kt(t,t.ins_h,t.window[t.strstart+1]));else(i=G(t,0,t.window[t.strstart])),t.lookahead--,t.strstart++;if(i&&(yt(t,!1),0===t.strm.avail_out))return 1;}
return((t.insert=t.strstart<2?t.strstart:2),e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2);},Ut=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<ct){if((Rt(t),t.lookahead<ct&&e===W))return 1;if(0===t.lookahead)break;}
if(((a=0),t.lookahead>=3&&((t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1])),(a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h]),(t.head[t.ins_h]=t.strstart)),(t.prev_length=t.match_length),(t.prev_match=t.match_start),(t.match_length=2),0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ct&&((t.match_length=Et(t,a)),t.match_length<=5&&(t.strategy===st||(3===t.match_length&&t.strstart-t.match_start>4096))&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length)){(n=t.strstart+t.lookahead-3),(i=G(t,t.strstart-1-t.prev_match,t.prev_length-3)),(t.lookahead-=t.prev_length-1),(t.prev_length-=2);do{++t.strstart<=n&&((t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1])),(a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h]),(t.head[t.ins_h]=t.strstart));}while(0!=--t.prev_length);if(((t.match_available=0),(t.match_length=2),t.strstart++,i&&(yt(t,!1),0===t.strm.avail_out)))
return 1;}else if(t.match_available){if(((i=G(t,0,t.window[t.strstart-1])),i&&yt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out))
return 1;}else(t.match_available=1),t.strstart++,t.lookahead--;}
return(t.match_available&&((i=G(t,0,t.window[t.strstart-1])),(t.match_available=0)),(t.insert=t.strstart<2?t.strstart:2),e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2);};function St(t,e,a,i,n){(this.good_length=t),(this.max_lazy=e),(this.nice_length=a),(this.max_chain=i),(this.func=n);}
const Dt=[new St(0,0,0,0,(t,e)=>{let a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if((Rt(t),0===t.lookahead&&e===W))return 1;if(0===t.lookahead)break;}
(t.strstart+=t.lookahead),(t.lookahead=0);const i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&((t.lookahead=t.strstart-i),(t.strstart=i),yt(t,!1),0===t.strm.avail_out))
return 1;if(t.strstart-t.block_start>=t.w_size-ct&&(yt(t,!1),0===t.strm.avail_out))
return 1;}
return((t.insert=0),e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(yt(t,!1),t.strm.avail_out),1));}),new St(4,4,8,4,Zt),new St(4,5,16,8,Zt),new St(4,6,32,32,Zt),new St(4,4,16,16,Ut),new St(8,16,32,32,Ut),new St(8,16,128,128,Ut),new St(8,32,128,256,Ut),new St(32,128,258,1024,Ut),new St(32,258,258,4096,Ut)];function Tt(){(this.strm=null),(this.status=0),(this.pending_buf=null),(this.pending_buf_size=0),(this.pending_out=0),(this.pending=0),(this.wrap=0),(this.gzhead=null),(this.gzindex=0),(this.method=_t),(this.last_flush=-1),(this.w_size=0),(this.w_bits=0),(this.w_mask=0),(this.window=null),(this.window_size=0),(this.prev=null),(this.head=null),(this.ins_h=0),(this.hash_size=0),(this.hash_bits=0),(this.hash_mask=0),(this.hash_shift=0),(this.block_start=0),(this.match_length=0),(this.prev_match=0),(this.match_available=0),(this.strstart=0),(this.match_start=0),(this.lookahead=0),(this.prev_length=0),(this.max_chain_length=0),(this.max_lazy_match=0),(this.level=0),(this.strategy=0),(this.good_match=0),(this.nice_match=0),(this.dyn_ltree=new Uint16Array(1146)),(this.dyn_dtree=new Uint16Array(122)),(this.bl_tree=new Uint16Array(78)),mt(this.dyn_ltree),mt(this.dyn_dtree),mt(this.bl_tree),(this.l_desc=null),(this.d_desc=null),(this.bl_desc=null),(this.bl_count=new Uint16Array(16)),(this.heap=new Uint16Array(573)),mt(this.heap),(this.heap_len=0),(this.heap_max=0),(this.depth=new Uint16Array(573)),mt(this.depth),(this.l_buf=0),(this.lit_bufsize=0),(this.last_lit=0),(this.d_buf=0),(this.opt_len=0),(this.static_len=0),(this.matches=0),(this.insert=0),(this.bi_buf=0),(this.bi_valid=0);}
const Ot=t=>{if(!t||!t.state)return gt(t,et);(t.total_in=t.total_out=0),(t.data_type=dt);const e=t.state;return((e.pending=0),(e.pending_out=0),e.wrap<0&&(e.wrap=-e.wrap),(e.status=e.wrap?42:wt),(t.adler=2===e.wrap?0:1),(e.last_flush=W),K(e),$);},It=t=>{const e=Ot(t);var a;return(e===$&&(((a=t.state).window_size=2*a.w_size),mt(a.head),(a.max_lazy_match=Dt[a.level].max_lazy),(a.good_match=Dt[a.level].good_length),(a.nice_match=Dt[a.level].nice_length),(a.max_chain_length=Dt[a.level].max_chain),(a.strstart=0),(a.block_start=0),(a.lookahead=0),(a.insert=0),(a.match_length=a.prev_length=2),(a.match_available=0),(a.ins_h=0)),e);},Ft=(t,e,a,i,n,s)=>{if(!t)return et;let r=1;if((e===nt&&(e=6),i<0?((r=0),(i=-i)):i>15&&((r=2),(i-=16)),n<1||n>9||a!==_t||i<8||i>15||e<0||e>9||s<0||s>ot))
return gt(t,et);8===i&&(i=9);const l=new Tt();return((t.state=l),(l.strm=t),(l.wrap=r),(l.gzhead=null),(l.w_bits=i),(l.w_size=1<<l.w_bits),(l.w_mask=l.w_size-1),(l.hash_bits=n+7),(l.hash_size=1<<l.hash_bits),(l.hash_mask=l.hash_size-1),(l.hash_shift=~~((l.hash_bits+3-1)/3)),(l.window=new Uint8Array(2*l.w_size)),(l.head=new Uint16Array(l.hash_size)),(l.prev=new Uint16Array(l.w_size)),(l.lit_bufsize=1<<(n+6)),(l.pending_buf_size=4*l.lit_bufsize),(l.pending_buf=new Uint8Array(l.pending_buf_size)),(l.d_buf=1*l.lit_bufsize),(l.l_buf=3*l.lit_bufsize),(l.level=e),(l.strategy=s),(l.method=a),It(t));};var Lt={deflateInit:(t,e)=>Ft(t,e,_t,15,8,ht),deflateInit2:Ft,deflateReset:It,deflateResetKeep:Ot,deflateSetHeader:(t,e)=>t&&t.state?(2!==t.state.wrap?et:((t.state.gzhead=e),$)):et,deflate:(t,e)=>{let a,i;if(!t||!t.state||e>V||e<0)return t?gt(t,et):et;const n=t.state;if(!t.output||(!t.input&&0!==t.avail_in)||(n.status===bt&&e!==Q))
return gt(t,0===t.avail_out?it:et);n.strm=t;const s=n.last_flush;if(((n.last_flush=e),42===n.status))
if(2===n.wrap)
(t.adler=0),xt(n,31),xt(n,139),xt(n,8),n.gzhead?(xt(n,(n.gzhead.text?1:0)+
(n.gzhead.hcrc?2:0)+
(n.gzhead.extra?4:0)+
(n.gzhead.name?8:0)+
(n.gzhead.comment?16:0)),xt(n,255&n.gzhead.time),xt(n,(n.gzhead.time>>8)&255),xt(n,(n.gzhead.time>>16)&255),xt(n,(n.gzhead.time>>24)&255),xt(n,9===n.level?2:n.strategy>=rt||n.level<2?4:0),xt(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(xt(n,255&n.gzhead.extra.length),xt(n,(n.gzhead.extra.length>>8)&255)),n.gzhead.hcrc&&(t.adler=M(t.adler,n.pending_buf,n.pending,0)),(n.gzindex=0),(n.status=69)):(xt(n,0),xt(n,0),xt(n,0),xt(n,0),xt(n,0),xt(n,9===n.level?2:n.strategy>=rt||n.level<2?4:0),xt(n,3),(n.status=wt));else{let e=(_t+((n.w_bits-8)<<4))<<8,a=-1;(a=n.strategy>=rt||n.level<2?0:n.level<6?1:6===n.level?2:3),(e|=a<<6),0!==n.strstart&&(e|=32),(e+=31-(e%31)),(n.status=wt),zt(n,e),0!==n.strstart&&(zt(n,t.adler>>>16),zt(n,65535&t.adler)),(t.adler=1);}
if(69===n.status)
if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),(a=n.pending),n.pending!==n.pending_buf_size));)
xt(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&((n.gzindex=0),(n.status=73));}else n.status=73;if(73===n.status)
if(n.gzhead.name){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),(a=n.pending),n.pending===n.pending_buf_size)){i=1;break;}
(i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0),xt(n,i);}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),0===i&&((n.gzindex=0),(n.status=91));}else n.status=91;if(91===n.status)
if(n.gzhead.comment){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),(a=n.pending),n.pending===n.pending_buf_size)){i=1;break;}
(i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0),xt(n,i);}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),0===i&&(n.status=ut);}else n.status=ut;if((n.status===ut&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&vt(t),n.pending+2<=n.pending_buf_size&&(xt(n,255&t.adler),xt(n,(t.adler>>8)&255),(t.adler=0),(n.status=wt))):(n.status=wt)),0!==n.pending)){if((vt(t),0===t.avail_out))return(n.last_flush=-1),$;}else if(0===t.avail_in&&pt(e)<=pt(s)&&e!==Q)
return gt(t,it);if(n.status===bt&&0!==t.avail_in)return gt(t,it);if(0!==t.avail_in||0!==n.lookahead||(e!==W&&n.status!==bt)){let a=n.strategy===rt?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(Rt(t),0===t.lookahead)){if(e===W)return 1;break;}
if(((t.match_length=0),(a=G(t,0,t.window[t.strstart])),t.lookahead--,t.strstart++,a&&(yt(t,!1),0===t.strm.avail_out)))
return 1;}
return((t.insert=0),e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2);})(n,e):n.strategy===lt?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=ft){if((Rt(t),t.lookahead<=ft&&e===W))return 1;if(0===t.lookahead)break;}
if(((t.match_length=0),t.lookahead>=3&&t.strstart>0&&((n=t.strstart-1),(i=r[n]),i===r[++n]&&i===r[++n]&&i===r[++n]))){s=t.strstart+ft;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);(t.match_length=ft-(s-n)),t.match_length>t.lookahead&&(t.match_length=t.lookahead);}
if((t.match_length>=3?((a=G(t,1,t.match_length-3)),(t.lookahead-=t.match_length),(t.strstart+=t.match_length),(t.match_length=0)):((a=G(t,0,t.window[t.strstart])),t.lookahead--,t.strstart++),a&&(yt(t,!1),0===t.strm.avail_out)))
return 1;}
return((t.insert=0),e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2);})(n,e):Dt[n.level].func(n,e);if(((3!==a&&4!==a)||(n.status=bt),1===a||3===a))
return 0===t.avail_out&&(n.last_flush=-1),$;if(2===a&&(e===q?X(n):e!==V&&(P(n,0,0,!1),e===J&&(mt(n.head),0===n.lookahead&&((n.strstart=0),(n.block_start=0),(n.insert=0)))),vt(t),0===t.avail_out))
return(n.last_flush=-1),$;}
return e!==Q?$:n.wrap<=0?tt:(2===n.wrap?(xt(n,255&t.adler),xt(n,(t.adler>>8)&255),xt(n,(t.adler>>16)&255),xt(n,(t.adler>>24)&255),xt(n,255&t.total_in),xt(n,(t.total_in>>8)&255),xt(n,(t.total_in>>16)&255),xt(n,(t.total_in>>24)&255)):(zt(n,t.adler>>>16),zt(n,65535&t.adler)),vt(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?$:tt);},deflateEnd:t=>{if(!t||!t.state)return et;const e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==ut&&e!==wt&&e!==bt?gt(t,et):((t.state=null),e===wt?gt(t,at):$);},deflateSetDictionary:(t,e)=>{let a=e.length;if(!t||!t.state)return et;const i=t.state,n=i.wrap;if(2===n||(1===n&&42!==i.status)||i.lookahead)return et;if((1===n&&(t.adler=B(t.adler,e,a,0)),(i.wrap=0),a>=i.w_size)){0===n&&(mt(i.head),(i.strstart=0),(i.block_start=0),(i.insert=0));let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),(e=t),(a=i.w_size);}
const s=t.avail_in,r=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Rt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{(i.ins_h=kt(i,i.ins_h,i.window[t+3-1])),(i.prev[t&i.w_mask]=i.head[i.ins_h]),(i.head[i.ins_h]=t),t++;}while(--e);(i.strstart=t),(i.lookahead=2),Rt(i);}
return((i.strstart+=i.lookahead),(i.block_start=i.strstart),(i.insert=i.lookahead),(i.lookahead=0),(i.match_length=i.prev_length=2),(i.match_available=0),(t.next_in=r),(t.input=l),(t.avail_in=s),(i.wrap=n),$);},deflateInfo:"pako deflate (from Nodeca project)"};const Nt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Bt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)
throw new TypeError(a+"must be non-object");for(const e in a)Nt(a,e)&&(t[e]=a[e]);}}
return t;},Ct=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),(i+=n.length);}
return a;};let Mt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(t){Mt=!1;}
const Ht=new Uint8Array(256);for(let t=0;t<256;t++)
Ht[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Ht[254]=Ht[254]=1;var jt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)
return new TextEncoder().encode(t);let e,a,i,n,s,r=t.length,l=0;for(n=0;n<r;n++)
(a=t.charCodeAt(n)),55296==(64512&a)&&n+1<r&&((i=t.charCodeAt(n+1)),56320==(64512&i)&&((a=65536+((a-55296)<<10)+(i-56320)),n++)),(l+=a<128?1:a<2048?2:a<65536?3:4);for(e=new Uint8Array(l),s=0,n=0;s<l;n++)
(a=t.charCodeAt(n)),55296==(64512&a)&&n+1<r&&((i=t.charCodeAt(n+1)),56320==(64512&i)&&((a=65536+((a-55296)<<10)+(i-56320)),n++)),a<128?(e[s++]=a):a<2048?((e[s++]=192|(a>>>6)),(e[s++]=128|(63&a))):a<65536?((e[s++]=224|(a>>>12)),(e[s++]=128|((a>>>6)&63)),(e[s++]=128|(63&a))):((e[s++]=240|(a>>>18)),(e[s++]=128|((a>>>12)&63)),(e[s++]=128|((a>>>6)&63)),(e[s++]=128|(63&a)));return e;},Kt=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)
return new TextDecoder().decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue;}
let r=Ht[e];if(r>4)(s[n++]=65533),(i+=r-1);else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)
(e=(e<<6)|(63&t[i++])),r--;r>1?(s[n++]=65533):e<65536?(s[n++]=e):((e-=65536),(s[n++]=55296|((e>>10)&1023)),(s[n++]=56320|(1023&e)));}}
return((t,e)=>{if(e<65534&&t.subarray&&Mt)
return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a;})(s,n);},Pt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Ht[t[a]]>e?a:e;};var Yt=function(){(this.input=null),(this.next_in=0),(this.avail_in=0),(this.total_in=0),(this.output=null),(this.next_out=0),(this.avail_out=0),(this.total_out=0),(this.msg=""),(this.state=null),(this.data_type=2),(this.adler=0);};const Gt=Object.prototype.toString,{Z_NO_FLUSH:Xt,Z_SYNC_FLUSH:Wt,Z_FULL_FLUSH:qt,Z_FINISH:Jt,Z_OK:Qt,Z_STREAM_END:Vt,Z_DEFAULT_COMPRESSION:$t,Z_DEFAULT_STRATEGY:te,Z_DEFLATED:ee}=j;function ae(t){this.options=Bt({level:$t,method:ee,chunkSize:16384,windowBits:15,memLevel:8,strategy:te},t||{});let e=this.options;e.raw&&e.windowBits>0?(e.windowBits=-e.windowBits):e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),(this.err=0),(this.msg=""),(this.ended=!1),(this.chunks=[]),(this.strm=new Yt()),(this.strm.avail_out=0);let a=Lt.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Qt)throw new Error(H[a]);if((e.header&&Lt.deflateSetHeader(this.strm,e.header),e.dictionary)){let t;if(((t="string"==typeof e.dictionary?jt(e.dictionary):"[object ArrayBuffer]"===Gt.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary),(a=Lt.deflateSetDictionary(this.strm,t)),a!==Qt))
throw new Error(H[a]);this._dict_set=!0;}}
function ie(t,e){const a=new ae(e);if((a.push(t,!0),a.err))throw a.msg||H[a.err];return a.result;}
(ae.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Jt:Xt,"string"==typeof t?(a.input=jt(t)):"[object ArrayBuffer]"===Gt.call(t)?(a.input=new Uint8Array(t)):(a.input=t),a.next_in=0,a.avail_in=a.input.length;;)
if((0===a.avail_out&&((a.output=new Uint8Array(i)),(a.next_out=0),(a.avail_out=i)),(s===Wt||s===qt)&&a.avail_out<=6))
this.onData(a.output.subarray(0,a.next_out)),(a.avail_out=0);else{if(((n=Lt.deflate(a,s)),n===Vt))
return(a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),(n=Lt.deflateEnd(this.strm)),this.onEnd(n),(this.ended=!0),n===Qt);if(0!==a.avail_out){if(s>0&&a.next_out>0)
this.onData(a.output.subarray(0,a.next_out)),(a.avail_out=0);else if(0===a.avail_in)break;}else this.onData(a.output);}
return!0;}),(ae.prototype.onData=function(t){this.chunks.push(t);}),(ae.prototype.onEnd=function(t){t===Qt&&(this.result=Ct(this.chunks)),(this.chunks=[]),(this.err=t),(this.msg=this.strm.msg);});var ne={Deflate:ae,deflate:ie,deflateRaw:function(t,e){return((e=e||{}).raw=!0),ie(t,e);},gzip:function(t,e){return((e=e||{}).gzip=!0),ie(t,e);},constants:j};var se=function(t,e){let a,i,n,s,r,l,o,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z,A;const E=t.state;(a=t.next_in),(z=t.input),(i=a+(t.avail_in-5)),(n=t.next_out),(A=t.output),(s=n-(e-t.avail_out)),(r=n+(t.avail_out-257)),(l=E.dmax),(o=E.wsize),(h=E.whave),(d=E.wnext),(_=E.window),(f=E.hold),(c=E.bits),(u=E.lencode),(w=E.distcode),(b=(1<<E.lenbits)-1),(g=(1<<E.distbits)-1);t:do{c<15&&((f+=z[a++]<<c),(c+=8),(f+=z[a++]<<c),(c+=8)),(p=u[f&b]);e:for(;;){if(((m=p>>>24),(f>>>=m),(c-=m),(m=(p>>>16)&255),0===m))
A[n++]=65535&p;else{if(!(16&m)){if(0==(64&m)){p=u[(65535&p)+(f&((1<<m)-1))];continue e;}
if(32&m){E.mode=12;break t;}
(t.msg="invalid literal/length code"),(E.mode=30);break t;}
(k=65535&p),(m&=15),m&&(c<m&&((f+=z[a++]<<c),(c+=8)),(k+=f&((1<<m)-1)),(f>>>=m),(c-=m)),c<15&&((f+=z[a++]<<c),(c+=8),(f+=z[a++]<<c),(c+=8)),(p=w[f&g]);a:for(;;){if(((m=p>>>24),(f>>>=m),(c-=m),(m=(p>>>16)&255),!(16&m))){if(0==(64&m)){p=w[(65535&p)+(f&((1<<m)-1))];continue a;}
(t.msg="invalid distance code"),(E.mode=30);break t;}
if(((v=65535&p),(m&=15),c<m&&((f+=z[a++]<<c),(c+=8),c<m&&((f+=z[a++]<<c),(c+=8))),(v+=f&((1<<m)-1)),v>l)){(t.msg="invalid distance too far back"),(E.mode=30);break t;}
if(((f>>>=m),(c-=m),(m=n-s),v>m)){if(((m=v-m),m>h&&E.sane)){(t.msg="invalid distance too far back"),(E.mode=30);break t;}
if(((y=0),(x=_),0===d)){if(((y+=o-m),m<k)){k-=m;do{A[n++]=_[y++];}while(--m);(y=n-v),(x=A);}}else if(d<m){if(((y+=o+d-m),(m-=d),m<k)){k-=m;do{A[n++]=_[y++];}while(--m);if(((y=0),d<k)){(m=d),(k-=m);do{A[n++]=_[y++];}while(--m);(y=n-v),(x=A);}}}else if(((y+=d-m),m<k)){k-=m;do{A[n++]=_[y++];}while(--m);(y=n-v),(x=A);}
for(;k>2;)
(A[n++]=x[y++]),(A[n++]=x[y++]),(A[n++]=x[y++]),(k-=3);k&&((A[n++]=x[y++]),k>1&&(A[n++]=x[y++]));}else{y=n-v;do{(A[n++]=A[y++]),(A[n++]=A[y++]),(A[n++]=A[y++]),(k-=3);}while(k>2);k&&((A[n++]=A[y++]),k>1&&(A[n++]=A[y++]));}
break;}}
break;}}while(a<i&&n<r);(k=c>>3),(a-=k),(c-=k<<3),(f&=(1<<c)-1),(t.next_in=a),(t.next_out=n),(t.avail_in=a<i?i-a+5:5-(a-i)),(t.avail_out=n<r?r-n+257:257-(n-r)),(E.hold=f),(E.bits=c);};const re=15,le=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),oe=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),he=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),de=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var _e=(t,e,a,i,n,s,r,l)=>{const o=l.bits;let h,d,_,f,c,u,w=0,b=0,g=0,p=0,m=0,k=0,v=0,y=0,x=0,z=0,A=null,E=0;const R=new Uint16Array(16),Z=new Uint16Array(16);let U,S,D,T=null,O=0;for(w=0;w<=re;w++)R[w]=0;for(b=0;b<i;b++)R[e[a+b]]++;for(m=o,p=re;p>=1&&0===R[p];p--);if((m>p&&(m=p),0===p))
return(n[s++]=20971520),(n[s++]=20971520),(l.bits=1),0;for(g=1;g<p&&0===R[g];g++);for(m<g&&(m=g),y=1,w=1;w<=re;w++)
if(((y<<=1),(y-=R[w]),y<0))return-1;if(y>0&&(0===t||1!==p))return-1;for(Z[1]=0,w=1;w<re;w++)Z[w+1]=Z[w]+R[w];for(b=0;b<i;b++)0!==e[a+b]&&(r[Z[e[a+b]]++]=b);if((0===t?((A=T=r),(u=19)):1===t?((A=le),(E-=257),(T=oe),(O-=257),(u=256)):((A=he),(T=de),(u=-1)),(z=0),(b=0),(w=g),(c=s),(k=m),(v=0),(_=-1),(x=1<<m),(f=x-1),(1===t&&x>852)||(2===t&&x>592)))
return 1;for(;;){(U=w-v),r[b]<u?((S=0),(D=r[b])):r[b]>u?((S=T[O+r[b]]),(D=A[E+r[b]])):((S=96),(D=0)),(h=1<<(w-v)),(d=1<<k),(g=d);do{(d-=h),(n[c+(z>>v)+d]=(U<<24)|(S<<16)|D|0);}while(0!==d);for(h=1<<(w-1);z&h;)h>>=1;if((0!==h?((z&=h-1),(z+=h)):(z=0),b++,0==--R[w])){if(w===p)break;w=e[a+r[b]];}
if(w>m&&(z&f)!==_){for(0===v&&(v=m),c+=g,k=w-v,y=1<<k;k+v<p&&((y-=R[k+v]),!(y<=0));)
k++,(y<<=1);if(((x+=1<<k),(1===t&&x>852)||(2===t&&x>592)))
return 1;(_=z&f),(n[_]=(m<<24)|(k<<16)|(c-s)|0);}}
return(0!==z&&(n[c+z]=((w-v)<<24)|(64<<16)|0),(l.bits=m),0);};const{Z_FINISH:fe,Z_BLOCK:ce,Z_TREES:ue,Z_OK:we,Z_STREAM_END:be,Z_NEED_DICT:ge,Z_STREAM_ERROR:pe,Z_DATA_ERROR:me,Z_MEM_ERROR:ke,Z_BUF_ERROR:ve,Z_DEFLATED:ye}=j,xe=12,ze=30,Ae=t=>((t>>>24)&255)+
((t>>>8)&65280)+
((65280&t)<<8)+
((255&t)<<24);function Ee(){(this.mode=0),(this.last=!1),(this.wrap=0),(this.havedict=!1),(this.flags=0),(this.dmax=0),(this.check=0),(this.total=0),(this.head=null),(this.wbits=0),(this.wsize=0),(this.whave=0),(this.wnext=0),(this.window=null),(this.hold=0),(this.bits=0),(this.length=0),(this.offset=0),(this.extra=0),(this.lencode=null),(this.distcode=null),(this.lenbits=0),(this.distbits=0),(this.ncode=0),(this.nlen=0),(this.ndist=0),(this.have=0),(this.next=null),(this.lens=new Uint16Array(320)),(this.work=new Uint16Array(288)),(this.lendyn=null),(this.distdyn=null),(this.sane=0),(this.back=0),(this.was=0);}
const Re=t=>{if(!t||!t.state)return pe;const e=t.state;return((t.total_in=t.total_out=e.total=0),(t.msg=""),e.wrap&&(t.adler=1&e.wrap),(e.mode=1),(e.last=0),(e.havedict=0),(e.dmax=32768),(e.head=null),(e.hold=0),(e.bits=0),(e.lencode=e.lendyn=new Int32Array(852)),(e.distcode=e.distdyn=new Int32Array(592)),(e.sane=1),(e.back=-1),we);},Ze=t=>{if(!t||!t.state)return pe;const e=t.state;return(e.wsize=0),(e.whave=0),(e.wnext=0),Re(t);},Ue=(t,e)=>{let a;if(!t||!t.state)return pe;const i=t.state;return(e<0?((a=0),(e=-e)):((a=1+(e>>4)),e<48&&(e&=15)),e&&(e<8||e>15)?pe:(null!==i.window&&i.wbits!==e&&(i.window=null),(i.wrap=a),(i.wbits=e),Ze(t)));},Se=(t,e)=>{if(!t)return pe;const a=new Ee();(t.state=a),(a.window=null);const i=Ue(t,e);return i!==we&&(t.state=null),i;};let De,Te,Oe=!0;const Ie=t=>{if(Oe){(De=new Int32Array(512)),(Te=new Int32Array(32));let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(_e(1,t.lens,0,288,De,0,t.work,{bits:9}),e=0;e<32;)
t.lens[e++]=5;_e(2,t.lens,0,32,Te,0,t.work,{bits:5}),(Oe=!1);}
(t.lencode=De),(t.lenbits=9),(t.distcode=Te),(t.distbits=5);},Fe=(t,e,a,i)=>{let n;const s=t.state;return(null===s.window&&((s.wsize=1<<s.wbits),(s.wnext=0),(s.whave=0),(s.window=new Uint8Array(s.wsize))),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),(s.wnext=0),(s.whave=s.wsize)):((n=s.wsize-s.wnext),n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),(s.wnext=i),(s.whave=s.wsize)):((s.wnext+=n),s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0);};var Le={inflateReset:Ze,inflateReset2:Ue,inflateResetKeep:Re,inflateInit:t=>Se(t,15),inflateInit2:Se,inflate:(t,e)=>{let a,i,n,s,r,l,o,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!t||!t.state||!t.output||(!t.input&&0!==t.avail_in))
return pe;(a=t.state),a.mode===xe&&(a.mode=13),(r=t.next_out),(n=t.output),(o=t.avail_out),(s=t.next_in),(i=t.input),(l=t.avail_in),(h=a.hold),(d=a.bits),(_=l),(f=o),(x=we);t:for(;;)
switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break;}
for(;d<16;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(2&a.wrap&&35615===h){(a.check=0),(A[0]=255&h),(A[1]=(h>>>8)&255),(a.check=M(a.check,A,2,0)),(h=0),(d=0),(a.mode=2);break;}
if(((a.flags=0),a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31)){(t.msg="incorrect header check"),(a.mode=ze);break;}
if((15&h)!==ye){(t.msg="unknown compression method"),(a.mode=ze);break;}
if(((h>>>=4),(d-=4),(y=8+(15&h)),0===a.wbits))
a.wbits=y;else if(y>a.wbits){(t.msg="invalid window size"),(a.mode=ze);break;}
(a.dmax=1<<a.wbits),(t.adler=a.check=1),(a.mode=512&h?10:xe),(h=0),(d=0);break;case 2:for(;d<16;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(((a.flags=h),(255&a.flags)!==ye)){(t.msg="unknown compression method"),(a.mode=ze);break;}
if(57344&a.flags){(t.msg="unknown header flags set"),(a.mode=ze);break;}
a.head&&(a.head.text=(h>>8)&1),512&a.flags&&((A[0]=255&h),(A[1]=(h>>>8)&255),(a.check=M(a.check,A,2,0))),(h=0),(d=0),(a.mode=3);case 3:for(;d<32;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
a.head&&(a.head.time=h),512&a.flags&&((A[0]=255&h),(A[1]=(h>>>8)&255),(A[2]=(h>>>16)&255),(A[3]=(h>>>24)&255),(a.check=M(a.check,A,4,0))),(h=0),(d=0),(a.mode=4);case 4:for(;d<16;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
a.head&&((a.head.xflags=255&h),(a.head.os=h>>8)),512&a.flags&&((A[0]=255&h),(A[1]=(h>>>8)&255),(a.check=M(a.check,A,2,0))),(h=0),(d=0),(a.mode=5);case 5:if(1024&a.flags){for(;d<16;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(a.length=h),a.head&&(a.head.extra_len=h),512&a.flags&&((A[0]=255&h),(A[1]=(h>>>8)&255),(a.check=M(a.check,A,2,0))),(h=0),(d=0);}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&((c=a.length),c>l&&(c=l),c&&(a.head&&((y=a.head.extra_len-a.length),a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&(a.check=M(a.check,i,c,s)),(l-=c),(s+=c),(a.length-=c)),a.length))
break t;(a.length=0),(a.mode=7);case 7:if(2048&a.flags){if(0===l)break t;c=0;do{(y=i[s+c++]),a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y));}while(y&&c<l);if((512&a.flags&&(a.check=M(a.check,i,c,s)),(l-=c),(s+=c),y))
break t;}else a.head&&(a.head.name=null);(a.length=0),(a.mode=8);case 8:if(4096&a.flags){if(0===l)break t;c=0;do{(y=i[s+c++]),a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y));}while(y&&c<l);if((512&a.flags&&(a.check=M(a.check,i,c,s)),(l-=c),(s+=c),y))
break t;}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;d<16;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(h!==(65535&a.check)){(t.msg="header crc mismatch"),(a.mode=ze);break;}
(h=0),(d=0);}
a.head&&((a.head.hcrc=(a.flags>>9)&1),(a.head.done=!0)),(t.adler=a.check=0),(a.mode=xe);break;case 10:for(;d<32;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(t.adler=a.check=Ae(h)),(h=0),(d=0),(a.mode=11);case 11:if(0===a.havedict)
return((t.next_out=r),(t.avail_out=o),(t.next_in=s),(t.avail_in=l),(a.hold=h),(a.bits=d),ge);(t.adler=a.check=1),(a.mode=xe);case xe:if(e===ce||e===ue)break t;case 13:if(a.last){(h>>>=7&d),(d-=7&d),(a.mode=27);break;}
for(;d<3;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
switch(((a.last=1&h),(h>>>=1),(d-=1),3&h)){case 0:a.mode=14;break;case 1:if((Ie(a),(a.mode=20),e===ue)){(h>>>=2),(d-=2);break t;}
break;case 2:a.mode=17;break;case 3:(t.msg="invalid block type"),(a.mode=ze);}
(h>>>=2),(d-=2);break;case 14:for(h>>>=7&d,d-=7&d;d<32;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if((65535&h)!=((h>>>16)^65535)){(t.msg="invalid stored block lengths"),(a.mode=ze);break;}
if(((a.length=65535&h),(h=0),(d=0),(a.mode=15),e===ue))
break t;case 15:a.mode=16;case 16:if(((c=a.length),c)){if((c>l&&(c=l),c>o&&(c=o),0===c))break t;n.set(i.subarray(s,s+c),r),(l-=c),(s+=c),(o-=c),(r+=c),(a.length-=c);break;}
a.mode=xe;break;case 17:for(;d<14;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(((a.nlen=257+(31&h)),(h>>>=5),(d-=5),(a.ndist=1+(31&h)),(h>>>=5),(d-=5),(a.ncode=4+(15&h)),(h>>>=4),(d-=4),a.nlen>286||a.ndist>30)){(t.msg="too many length or distance symbols"),(a.mode=ze);break;}
(a.have=0),(a.mode=18);case 18:for(;a.have<a.ncode;){for(;d<3;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(a.lens[Z[a.have++]]=7&h),(h>>>=3),(d-=3);}
for(;a.have<19;)a.lens[Z[a.have++]]=0;if(((a.lencode=a.lendyn),(a.lenbits=7),(E={bits:a.lenbits}),(x=_e(0,a.lens,0,19,a.lencode,0,a.work,E)),(a.lenbits=E.bits),x)){(t.msg="invalid code lengths set"),(a.mode=ze);break;}
(a.have=0),(a.mode=19);case 19:for(;a.have<a.nlen+a.ndist;){for(;(z=a.lencode[h&((1<<a.lenbits)-1)]),(b=z>>>24),(g=(z>>>16)&255),(p=65535&z),!(b<=d);){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(p<16)(h>>>=b),(d-=b),(a.lens[a.have++]=p);else{if(16===p){for(R=b+2;d<R;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(((h>>>=b),(d-=b),0===a.have)){(t.msg="invalid bit length repeat"),(a.mode=ze);break;}
(y=a.lens[a.have-1]),(c=3+(3&h)),(h>>>=2),(d-=2);}else if(17===p){for(R=b+3;d<R;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(h>>>=b),(d-=b),(y=0),(c=3+(7&h)),(h>>>=3),(d-=3);}else{for(R=b+7;d<R;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(h>>>=b),(d-=b),(y=0),(c=11+(127&h)),(h>>>=7),(d-=7);}
if(a.have+c>a.nlen+a.ndist){(t.msg="invalid bit length repeat"),(a.mode=ze);break;}
for(;c--;)a.lens[a.have++]=y;}}
if(a.mode===ze)break;if(0===a.lens[256]){(t.msg="invalid code -- missing end-of-block"),(a.mode=ze);break;}
if(((a.lenbits=9),(E={bits:a.lenbits}),(x=_e(1,a.lens,0,a.nlen,a.lencode,0,a.work,E)),(a.lenbits=E.bits),x)){(t.msg="invalid literal/lengths set"),(a.mode=ze);break;}
if(((a.distbits=6),(a.distcode=a.distdyn),(E={bits:a.distbits}),(x=_e(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E)),(a.distbits=E.bits),x)){(t.msg="invalid distances set"),(a.mode=ze);break;}
if(((a.mode=20),e===ue))break t;case 20:a.mode=21;case 21:if(l>=6&&o>=258){(t.next_out=r),(t.avail_out=o),(t.next_in=s),(t.avail_in=l),(a.hold=h),(a.bits=d),se(t,f),(r=t.next_out),(n=t.output),(o=t.avail_out),(s=t.next_in),(i=t.input),(l=t.avail_in),(h=a.hold),(d=a.bits),a.mode===xe&&(a.back=-1);break;}
for(a.back=0;(z=a.lencode[h&((1<<a.lenbits)-1)]),(b=z>>>24),(g=(z>>>16)&255),(p=65535&z),!(b<=d);){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(g&&0==(240&g)){for(m=b,k=g,v=p;(z=a.lencode[v+((h&((1<<(m+k))-1))>>m)]),(b=z>>>24),(g=(z>>>16)&255),(p=65535&z),!(m+b<=d);){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(h>>>=m),(d-=m),(a.back+=m);}
if(((h>>>=b),(d-=b),(a.back+=b),(a.length=p),0===g)){a.mode=26;break;}
if(32&g){(a.back=-1),(a.mode=xe);break;}
if(64&g){(t.msg="invalid literal/length code"),(a.mode=ze);break;}
(a.extra=15&g),(a.mode=22);case 22:if(a.extra){for(R=a.extra;d<R;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(a.length+=h&((1<<a.extra)-1)),(h>>>=a.extra),(d-=a.extra),(a.back+=a.extra);}
(a.was=a.length),(a.mode=23);case 23:for(;(z=a.distcode[h&((1<<a.distbits)-1)]),(b=z>>>24),(g=(z>>>16)&255),(p=65535&z),!(b<=d);){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(0==(240&g)){for(m=b,k=g,v=p;(z=a.distcode[v+((h&((1<<(m+k))-1))>>m)]),(b=z>>>24),(g=(z>>>16)&255),(p=65535&z),!(m+b<=d);){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(h>>>=m),(d-=m),(a.back+=m);}
if(((h>>>=b),(d-=b),(a.back+=b),64&g)){(t.msg="invalid distance code"),(a.mode=ze);break;}
(a.offset=p),(a.extra=15&g),(a.mode=24);case 24:if(a.extra){for(R=a.extra;d<R;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
(a.offset+=h&((1<<a.extra)-1)),(h>>>=a.extra),(d-=a.extra),(a.back+=a.extra);}
if(a.offset>a.dmax){(t.msg="invalid distance too far back"),(a.mode=ze);break;}
a.mode=25;case 25:if(0===o)break t;if(((c=f-o),a.offset>c)){if(((c=a.offset-c),c>a.whave&&a.sane)){(t.msg="invalid distance too far back"),(a.mode=ze);break;}
c>a.wnext?((c-=a.wnext),(u=a.wsize-c)):(u=a.wnext-c),c>a.length&&(c=a.length),(w=a.window);}else(w=n),(u=r-a.offset),(c=a.length);c>o&&(c=o),(o-=c),(a.length-=c);do{n[r++]=w[u++];}while(--c);0===a.length&&(a.mode=21);break;case 26:if(0===o)break t;(n[r++]=a.length),o--,(a.mode=21);break;case 27:if(a.wrap){for(;d<32;){if(0===l)break t;l--,(h|=i[s++]<<d),(d+=8);}
if(((f-=o),(t.total_out+=f),(a.total+=f),f&&(t.adler=a.check=a.flags?M(a.check,n,f,r-f):B(a.check,n,f,r-f)),(f=o),(a.flags?h:Ae(h))!==a.check)){(t.msg="incorrect data check"),(a.mode=ze);break;}
(h=0),(d=0);}
a.mode=28;case 28:if(a.wrap&&a.flags){for(;d<32;){if(0===l)break t;l--,(h+=i[s++]<<d),(d+=8);}
if(h!==(4294967295&a.total)){(t.msg="incorrect length check"),(a.mode=ze);break;}
(h=0),(d=0);}
a.mode=29;case 29:x=be;break t;case ze:x=me;break t;case 31:return ke;case 32:default:return pe;}
return((t.next_out=r),(t.avail_out=o),(t.next_in=s),(t.avail_in=l),(a.hold=h),(a.bits=d),(a.wsize||(f!==t.avail_out&&a.mode<ze&&(a.mode<27||e!==fe)))&&Fe(t,t.output,t.next_out,f-t.avail_out),(_-=t.avail_in),(f-=t.avail_out),(t.total_in+=_),(t.total_out+=f),(a.total+=f),a.wrap&&f&&(t.adler=a.check=a.flags?M(a.check,n,f,t.next_out-f):B(a.check,n,f,t.next_out-f)),(t.data_type=a.bits+
(a.last?64:0)+
(a.mode===xe?128:0)+
(20===a.mode||15===a.mode?256:0)),((0===_&&0===f)||e===fe)&&x===we&&(x=ve),x);},inflateEnd:t=>{if(!t||!t.state)return pe;let e=t.state;return e.window&&(e.window=null),(t.state=null),we;},inflateGetHeader:(t,e)=>{if(!t||!t.state)return pe;const a=t.state;return 0==(2&a.wrap)?pe:((a.head=e),(e.done=!1),we);},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return t&&t.state?((i=t.state),0!==i.wrap&&11!==i.mode?pe:11===i.mode&&((n=1),(n=B(n,e,a,0)),n!==i.check)?me:((s=Fe(t,e,a,a)),s?((i.mode=31),ke):((i.havedict=1),we))):pe;},inflateInfo:"pako inflate (from Nodeca project)"};var Ne=function(){(this.text=0),(this.time=0),(this.xflags=0),(this.os=0),(this.extra=null),(this.extra_len=0),(this.name=""),(this.comment=""),(this.hcrc=0),(this.done=!1);};const Be=Object.prototype.toString,{Z_NO_FLUSH:Ce,Z_FINISH:Me,Z_OK:He,Z_STREAM_END:je,Z_NEED_DICT:Ke,Z_STREAM_ERROR:Pe,Z_DATA_ERROR:Ye,Z_MEM_ERROR:Ge}=j;function Xe(t){this.options=Bt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&((e.windowBits=-e.windowBits),0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||(t&&t.windowBits)||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),(this.err=0),(this.msg=""),(this.ended=!1),(this.chunks=[]),(this.strm=new Yt()),(this.strm.avail_out=0);let a=Le.inflateInit2(this.strm,e.windowBits);if(a!==He)throw new Error(H[a]);if(((this.header=new Ne()),Le.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?(e.dictionary=jt(e.dictionary)):"[object ArrayBuffer]"===Be.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&((a=Le.inflateSetDictionary(this.strm,e.dictionary)),a!==He))))
throw new Error(H[a]);}
function We(t,e){const a=new Xe(e);if((a.push(t),a.err))throw a.msg||H[a.err];return a.result;}
(Xe.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,l;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Me:Ce,"[object ArrayBuffer]"===Be.call(t)?(a.input=new Uint8Array(t)):(a.input=t),a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&((a.output=new Uint8Array(i)),(a.next_out=0),(a.avail_out=i)),s=Le.inflate(a,r),s===Ke&&n&&((s=Le.inflateSetDictionary(a,n)),s===He?(s=Le.inflate(a,r)):s===Ye&&(s=Ke));a.avail_in>0&&s===je&&a.state.wrap>0&&0!==t[a.next_in];)
Le.inflateReset(a),(s=Le.inflate(a,r));switch(s){case Pe:case Ye:case Ke:case Ge:return this.onEnd(s),(this.ended=!0),!1;}
if(((l=a.avail_out),a.next_out&&(0===a.avail_out||s===je)))
if("string"===this.options.to){let t=Pt(a.output,a.next_out),e=a.next_out-t,n=Kt(a.output,t);(a.next_out=e),(a.avail_out=i-e),e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n);}else
this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==He||0!==l){if(s===je)
return((s=Le.inflateEnd(this.strm)),this.onEnd(s),(this.ended=!0),!0);if(0===a.avail_in)break;}}
return!0;}),(Xe.prototype.onData=function(t){this.chunks.push(t);}),(Xe.prototype.onEnd=function(t){t===He&&("string"===this.options.to?(this.result=this.chunks.join("")):(this.result=Ct(this.chunks))),(this.chunks=[]),(this.err=t),(this.msg=this.strm.msg);});var qe={Inflate:Xe,inflate:We,inflateRaw:function(t,e){return((e=e||{}).raw=!0),We(t,e);},ungzip:We,constants:j};const{Deflate:Je,deflate:Qe,deflateRaw:Ve,gzip:$e}=ne,{Inflate:ta,inflate:ea,inflateRaw:aa,ungzip:ia}=qe;var na=Je,sa=Qe,ra=Ve,la=$e,oa=ta,ha=ea,da=aa,_a=ia,fa=j,ca={Deflate:na,deflate:sa,deflateRaw:ra,gzip:la,Inflate:oa,inflate:ha,inflateRaw:da,ungzip:_a,constants:fa};(t.Deflate=na),(t.Inflate=oa),(t.constants=fa),(t.default=ca),(t.deflate=sa),(t.deflateRaw=ra),(t.gzip=la),(t.inflate=ha),(t.inflateRaw=da),(t.ungzip=_a),Object.defineProperty(t,"__esModule",{value:!0});});/*!
* Copyright (c) 2022 Acoustic, L.P. All rights reserved.
*
* NOTICE: This file contains material that is confidential and proprietary to
* Acoustic, L.P. and/or other developers. No license is granted under any intellectual or
* industrial property rights of Acoustic, L.P. except as may be provided in an agreement with
* Acoustic, L.P. Any unauthorized copying or distribution of content from this file is
* prohibited.
*
* @version 6.2.0.2010
* @flags NDEBUG
*/if(window.TLT){throw "Attempting to recreate TLT. Library may be included more than once on the page.";}
window.TLT=(function(){var d,n,a,m,H,B,r,c,k,D,z,v=false,P;function q(R){if(window.TLT&&R.persisted){TLT.terminationReason="";TLT.init();}}
function f(Y,R,S,Z){var W=null,aa=null,U=TLT.getModule("replay"),X=TLT.getModule("TLCookie"),ab=TLT.getModule("performance"),T=null,V=P.getOriginAndPath();if(!R||typeof R!=="string"){return;}
if(!S||typeof S!=="string"){S="";}
aa={type:2,screenview:{type:Y,name:R,originalUrl:V.path,url:TLT.normalizeUrl("",V.path,2),host:V.origin,referrer:S,title:document.title,queryParams:V.queryParams}};if(Y==="LOAD"){T={type:"screenview_load",name:R};}else{if(Y==="UNLOAD"){T={type:"screenview_unload",name:R};}}
if(T&&U){W=U.onevent(T);}
if(W){aa.dcid=W;}
if(Y==="LOAD"||Y==="UNLOAD"){B.post("",aa);}
if(T&&X){X.onevent(T);}
if(T&&ab){ab.onevent(T);}
if(T&&c){c.onevent(T);}}
var i=new Date().getTime(),y,G,I={},u={},o={},l=false,Q=null,w=(function(){var R,T=[];function S(Y){var V=k.framesBlacklist,X,W;R=R||[];Y=Y||null;if(typeof V!=="undefined"&&V.length>0){for(W=0;W<V.length;W+=1){X=a.queryAll(V[W],Y);if(X&&X.length>0){R=R.concat(X);}}
T=T.concat(a.queryAll("iframe",Y));}}
function U(V){if(P.indexOf(T,V)<0){S(V.ownerDocument);}
return P.indexOf(R,V)>-1;}
U.clearCache=function(){R=null;};return U;})(),K=null,g={config:["getConfig","updateConfig","getCoreConfig","updateCoreConfig","getModuleConfig","updateModuleConfig","getServiceConfig","updateServiceConfig"],queue:["post","setAutoFlush","flushAll"],browserBase:["getXPathFromNode","processDOMEvent"]},E=(function(){var R={};return{normalizeModuleEvents:function(W,U,Y,T){var S=R[W],X=false,V=false;Y=Y||t._getLocalTop();if(S){return;}
R[W]={loadFired:false,pageHideFired:false};P.forEach(U,function(Z){switch(Z.name){case "load":X=true;U.push(P.mixin(P.mixin({},Z),{name:"pageshow"}));break;case "unload":V=true;U.push(P.mixin(P.mixin({},Z),{name:"pagehide"}));U.push(P.mixin(P.mixin({},Z),{name:"beforeunload"}));break;case "change":if(P.isLegacyIE&&t.getFlavor()==="w3c"){U.push(P.mixin(P.mixin({},Z),{name:"propertychange"}));}
break;}});if(!X&&!V){delete R[W];return;}
R[W].silentLoad=!X;R[W].silentUnload=!V;if(!X){U.push({name:"load",target:Y});}
if(!V){U.push({name:"unload",target:Y});}},canPublish:function(S,U){var T;if(R.hasOwnProperty(S)===false){return true;}
T=R[S];switch(U.type){case "load":T.pageHideFired=false;T.loadFired=true;return!T.silentLoad;case "pageshow":T.pageHideFired=false;U.type="load";return!T.loadFired&&!T.silentLoad;case "pagehide":U.type="unload";T.loadFired=false;T.pageHideFired=true;return!T.silentUnload;case "unload":case "beforeunload":U.type="unload";T.loadFired=false;return!T.pageHideFired&&!T.silentUnload;}
return true;},isUnload:function(S){return typeof S==="object"?S.type==="unload"||S.type==="beforeunload"||S.type==="pagehide":false;}};})(),O={},s={},b={},F=[],L=function(){},j=null,A=true,p=function(){},x=false,M=(function(){var R=window.location,T=R.pathname,S=R.hash,U="";return function(){var X=R.pathname,V=R.hash,W=U;if(X!==T){W=TLT.normalizeUrl("",X+V,2);}else{if(V!==S){W=TLT.normalizeUrl("",V,2);}}
if(W!==U){if(U){f("UNLOAD",U);}
f("LOAD",W);U=W;T=X;S=V;}};})(),C=function(Y,W){var V,R,T,X,S,U=null;if(!Y||!W){return U;}
for(V=0,R=Y.length;V<R;V+=1){T=Y[V];switch(typeof T){case "object":X=new RegExp(T.regex,T.flags);S=X.exec(W);if(S){U=S[0];}
break;case "string":if(W.indexOf(T)!==-1){U=T;}
break;default:break;}}
return U;},N=function(T,aa){var U,S,V,Z=false,R=k.blockedElements,X,Y,W;if(!R||!R.length){N=function(){return false;};return Z;}
if(!T||!T.nodeType){return Z;}
aa=aa||P.getDocument(T);for(U=0,V=R.length;U<V&&!Z;U+=1){Y=a.queryAll(R[U],aa);for(S=0,W=Y.length;S<W&&!Z;S+=1){X=Y[S];Z=X.contains?X.contains(T):X===T;}}
return Z;},J=function(S){var R=false,T=["intent:","mailto:","sms:","tel:"];if(S&&P.getTagName(S)==="a"&&T.indexOf(S.protocol)!==-1){R=true;}
return R;},e=function(){var R=null,T="tltTabId";try{R=sessionStorage.getItem(T);if(!R){R=P.getRandomString(4);sessionStorage.setItem(T,R);}}catch(S){}
return R;},t={getTLTSessionCookieInfo:function(){return I;},_loadGlobalsForUnitTesting:function(R){P=R.utils;d=R.getService("ajax");n=R.getService("browserBase");a=R.getService("browser");m=R.getService("config");H=R.getService("domCapture");B=R.getService("queue");r=R.getService("serializer");c=R.getModule("dataLayer");k=m?m.getCoreConfig():null;},getStartTime:function(){return i;},getPageId:function(){return y||"#";},getTabId:function(){return G;},isMousemovementDetected:function(){return v;},setSessionCookieInfo:function(R,T,S){I.tltCookieName=T;I.tltCookieValue=S;},getLibraryVersion:function(){return "6.2.0.2010";},getCurrentWebEvent:function(){return O;},normalizeUrl:function(U,T,V){var S,R;S=this.getCoreConfig();if(S.normalization&&S.normalization.urlFunction){R=S.normalization.urlFunction;if(typeof R==="string"){R=P.access(R);}
try{T=R(T,V);}catch(W){}}
return T;},getCurrentOffset:function(){return this.getService("message").getCurrentOffset();},init:function(S,T){var R;P=this.utils;if(P.isLegacyIE){return;}
j=T;if(!A){throw "init must only be called once!";}
if(!S&&!this.config){throw "missing configuration.";}
S=S||this.config;this.config=S;A=false;y="P."+P.getRandomString(28);G=e();R=function(U){U=U||window.event||{};if(U.type==="load"||document.readyState!=="loading"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",R,false);window.removeEventListener("load",R,false);}else{document.detachEvent("onreadystatechange",R);window.detachEvent("onload",R);}
L(S,T);}};if(document.readyState==="complete"||(document.readyState==="interactive"&&!P.isIE)){setTimeout(R);}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",R,false);window.addEventListener("load",R,false);}else{document.attachEvent("onreadystatechange",R);window.attachEvent("onload",R);}}},isInitialized:function(){return l;},getState:function(){return Q;},destroy:function(T,R){var S="",U="",W=null,X=null,V=null,aa=false;if(A){return false;}
this.stopAll();if(!T){for(S in s){if(s.hasOwnProperty(S)){U=S.split("|")[0];W=s[S].target;aa=s[S].delegateTarget||undefined;a.unsubscribe(U,W,this._publishEvent,aa);}}
if(z){a.unsubscribe("mousemove",document,z);z=null;}}
for(X in o){if(o.hasOwnProperty(X)){V=o[X].instance;if(V&&typeof V.destroy==="function"){V.destroy();}
o[X].instance=null;}}
w.clearCache();s={};O={};F=[];l=false;A=true;Q="destroyed";TLT.terminationReason=R||Q;try{sessionStorage.setItem("tl.TR",TLT.terminationReason);sessionStorage.setItem("tl.PU",this.normalizeUrl("",location.href));}catch(Z){}
if(typeof j==="function"){try{j("destroyed");}catch(Y){}}
if(!D){window.addEventListener("pageshow",q);D=true;}},_updateModules:function(T){var V=null,S=null,R=true;if(k&&k.modules){try{for(S in k.modules){if(k.modules.hasOwnProperty(S)){V=k.modules[S];if(u.hasOwnProperty(S)){if(V.enabled===false){this.stop(S);continue;}
this.start(S);if(V.events){this._registerModuleEvents(S,V.events,T);}}}}
this._registerModuleEvents.clearCache();}catch(U){t.destroy(false,"_updateModules: "+U.message);R=false;}}else{R=false;}
return R;},rebind:function(R){t._updateModules(R);},getSessionData:function(){if(!t.isInitialized()){return;}
var V=null,R=null,T,U,S;if(!k||!k.sessionDataEnabled){return null;}
R=k.sessionData||{};T=R.sessionQueryName;if(T){U=P.getQueryStringValue(T,R.sessionQueryDelim);}else{T=R.sessionCookieName;if(T){U=P.getCookieValue(T);}else{S=TLT.getTLTSessionCookieInfo();T=S.tltCookieName;U=S.tltCookieValue;}}
if(T&&U){V=V||{};V.tltSCN=T;V.tltSCV=U;V.tltSCVNeedsHashing=!!R.sessionValueNeedsHashing;}
return V;},logGeolocation:function(R){var S;if(!t.isInitialized()){return;}
if(!R||!R.coords){return;}
S={type:13,geolocation:{lat:P.getValue(R,"coords.latitude",0),long:P.getValue(R,"coords.longitude",0),accuracy:Math.ceil(P.getValue(R,"coords.accuracy",0))}};B.post("",S);},logCustomEvent:function(T,R){if(!t.isInitialized()){return;}
var S=null;if(!T||typeof T!=="string"){T="CUSTOM";}
R=R||{};S={type:5,customEvent:{name:T,data:R}};B.post("",S);},logExceptionEvent:function(U,S,R){if(!t.isInitialized()){return;}
var T=null;if(!U||typeof U!=="string"){return;}
if(S){S=t.normalizeUrl("",S,6);}
S=S||"";R=R||-1;T={type:6,exception:{description:U,url:S,line:R}};B.post("",T);},logFormCompletion:function(R,T){if(!t.isInitialized()){return;}
var S={type:15,formCompletion:{submitted:!!R,valid:typeof T==="boolean"?T:null}};B.post("",S);},logDataLayer:function(R){var S;if(!t.isInitialized()){return;}
if(c){if(!R||typeof R==="object"){S={type:"logDataLayer",data:R};c.onevent(S);}}else{return;}},logScreenviewLoad:function(T,S,R){if(!t.isInitialized()){return;}
f("LOAD",T,S,R);},logScreenviewUnload:function(R){if(!t.isInitialized()){return;}
f("UNLOAD",R);},logDOMCapture:function(R,U){var V=null,T,S,W;if(!this.isInitialized()){return V;}
if(P.isLegacyIE){return V;}
if(H){R=R||window.document;S=this.getServiceConfig("domCapture");U=P.mixin({},S.options,U);T=H.captureDOM(R,U);if(T){V=U.dcid||"dcid-"+P.getSerialNumber()+"."+new Date().getTime();T.dcid=V;T.eventOn=!!U.eventOn;W={type:12,domCapture:T};if(U.timeoutExpired){W.domCapture.timeout=true;}
B.post("",W);if(U.qffd!==false&&!x&&W.domCapture.fullDOM){B.flush();x=true;}}}
return V;},performDOMCapture:function(T,R,S){return this.logDOMCapture(R,S);},performFormCompletion:function(S,R,T){return this.logFormCompletion(R,T);},_bridgeCallback:function(S){var R=b[S];if(R&&R.enabled){return R;}
return null;},logScreenCapture:function(){if(!t.isInitialized()){return;}
var R=t._bridgeCallback("screenCapture");if(R!==null){R.cbFunction();}},enableTealeafFramework:function(){if(!t.isInitialized()){return;}
var R=t._bridgeCallback("enableTealeafFramework");if(R!==null){R.cbFunction();}},disableTealeafFramework:function(){if(!t.isInitialized()){return;}
var R=t._bridgeCallback("disableTealeafFramework");if(R!==null){R.cbFunction();}},startNewTLFSession:function(){if(!t.isInitialized()){return;}
var R=t._bridgeCallback("startNewTLFSession");if(R!==null){R.cbFunction();}},currentSessionId:function(){if(!t.isInitialized()){return;}
var S,R=t._bridgeCallback("currentSessionId");if(R!==null){S=R.cbFunction();}
return S;},defaultValueForConfigurableItem:function(R){if(!t.isInitialized()){return;}
var T,S=t._bridgeCallback("defaultValueForConfigurableItem");if(S!==null){T=S.cbFunction(R);}
return T;},valueForConfigurableItem:function(R){if(!t.isInitialized()){return;}
var T,S=t._bridgeCallback("valueForConfigurableItem");if(S!==null){T=S.cbFunction(R);}
return T;},setConfigurableItem:function(S,U){if(!t.isInitialized()){return;}
var R=false,T=t._bridgeCallback("setConfigurableItem");if(T!==null){R=T.cbFunction(S,U);}
return R;},addAdditionalHttpHeader:function(S,U){if(!t.isInitialized()){return;}
var R=false,T=t._bridgeCallback("addAdditionalHttpHeader");if(T!==null){R=T.cbFunction(S,U);}
return R;},logCustomEventBridge:function(T,U,S){if(!t.isInitialized()){return;}
var R=false,V=t._bridgeCallback("logCustomEventBridge");if(V!==null){R=V.cbFunction(T,U,S);}
return R;},registerBridgeCallbacks:function(Z){var W,U,X,T=null,V,ab,S,R,aa=TLT.utils;if(!Z){return false;}
if(Z.length===0){b={};return false;}
try{for(W=0,X=Z.length;W<X;W+=1){T=Z[W];if(typeof T==="object"&&T.cbType&&T.cbFunction){V={enabled:T.enabled,cbFunction:T.cbFunction,cbOrder:T.order||0};if(aa.isUndefOrNull(b[T.cbType])){if(V.enabled){b[T.cbType]=V;}}else{if(!aa.isArray(b[T.cbType])){b[T.cbType]=[b[T.cbType]];}
ab=b[T.cbType];for(U=0,R=false,S=ab.length;U<S;U+=1){if(ab[U].cbOrder===V.cbOrder&&ab[U].cbFunction===V.cbFunction){R=true;if(!V.enabled){ab.splice(U,1);if(!ab.length){delete b[T.cbType];}}}else{if(ab[U].cbOrder>V.cbOrder){break;}}}
if(!R){if(V.enabled){ab.splice(U,0,V);}}}}}}catch(Y){return false;}
return true;},registerMutationCallback:function(R,T){var S;if(!R||typeof R!=="function"){return false;}
if(T){S=F.indexOf(R);if(S===-1){F.push(R);}}else{S=F.indexOf(R);if(S!==-1){F.splice(S,1);}}
return true;},invokeMutationCallbacks:function(T){var U,R,Y,X,W,V=[],S=[];if(F.length===0){return;}
if(Map){W=new Map();}else{W=new P.WeakMap();}
for(U=0;U<T.length;U++){X=T[U].target;if(X){Y=P.getDocument(X);if(W.get(Y)===undefined){if(Y.host){S.push(Y);}else{V.push(Y);}
W.set(Y,true);}}}
W.clear();for(U=0;U<F.length;U++){R=F[U];R(T,V,S);}},redirectQueue:function(U){var X,W,T,S,R,Y,V;if(!U||!U.length){return U;}
S=b.messageRedirect;if(!S){return U;}
if(!P.isArray(S)){R=[S];}else{R=S;}
for(W=0,Y=R.length;W<Y;W+=1){S=R[W];if(S&&S.enabled){for(X=0,T=U.length;X<T;X+=1){V=S.cbFunction(r.serialize(U[X]),U[X]);if(V&&typeof V==="object"){U[X]=V;}else{U.splice(X,1);X-=1;T=U.length;}}}}
return U;},_hasSameOrigin:function(S){var R=false;try{R=S.document.location.host===document.location.host&&S.document.location.protocol===document.location.protocol;if(!R){R=S.document.domain===document.domain;}
return R;}catch(T){}
return false;},provideRequestHeaders:function(){var S=null,R=b.addRequestHeaders;if(R&&R.enabled){S=R.cbFunction();}
return S;},_registerModuleEvents:(function(){var T,V=0,U=function(Z,Y,X){if(Z==="window"){return Y;}
if(Z==="document"){return X;}
return Z;};function W(X,ad,af){var ae=P.getDocument(af),Z=t._getLocalTop(),Y=P.isIFrameDescendant(af),ac,ab,aa;af=af||ae;E.normalizeModuleEvents(X,ad,Z,ae);if(Y){ac=n.ElementData.prototype.examineID(af).id;if(typeof ac==="string"){ac=ac.slice(0,ac.length-1);for(ab in s){if(s.hasOwnProperty(ab)){for(aa=0;aa<s[ab].length;aa+=1){if(X===s[ab][aa]){if(ab.indexOf(ac)!==-1){delete s[ab];break;}}}}}}}
P.forEach(ad,function(ag){var ai=U(ag.target,Z,ae)||ae,ah="";if(ag.recurseFrames!==true&&Y){return;}
if(typeof ai==="string"){P.forEach(a.queryAll(ai,af),function(aj){var ak=T.get(aj);if(!ak){ak=n.ElementData.prototype.examineID(aj);T.set(aj,ak);}
ah=ag.name+"|"+ak.id+ak.idType;if(P.indexOf(s[ah],X)!==-1){return;}
s[ah]=s[ah]||[];s[ah].push(X);s[ah].target=aj;a.subscribe(ag.name,aj,t._publishEvent);});}else{ah=t._buildToken4bubbleTarget(ag.name,ai,typeof ag.target==="undefined");if(!s.hasOwnProperty(ah)){s[ah]=[X];a.subscribe(ag.name,ai,t._publishEvent);}else{if(P.indexOf(s[ah],X)===-1){s[ah].push(X);}}}
if(ah!==""){if(typeof ai!=="string"){s[ah].target=ai;}}});}
function S(X){var Y=P.getIFrameWindow(X);return(Y!==null&&t._hasSameOrigin(Y)&&Y.document!==null&&Y.document.readyState==="complete"&&Y.document.body.innerHTML!=="");}
function R(aa,Y,ae){ae=ae||t._getLocalTop().document;T=T||new P.WeakMap();W(aa,Y,ae);if(aa!=="performance"){var ad=null,Z=null,X=a.queryAll("iframe, frame",ae),ac,ab;for(ac=0,ab=X.length;ac<ab;ac+=1){ad=X[ac];if(w(ad)){continue;}
if(S(ad)){Z=P.getIFrameWindow(ad);t._registerModuleEvents(aa,Y,Z.document);H.observeWindow(Z);continue;}
V+=1;(function(ah,ag,ai){var af=null,aj={moduleName:ah,moduleEvents:ag,hIFrame:ai,_registerModuleEventsDelayed:function(){var ak=null;if(!w(ai)){ak=P.getIFrameWindow(ai);if(t._hasSameOrigin(ak)){t._registerModuleEvents(ah,ag,ak.document);H.observeWindow(ak);}}
V-=1;if(!V){t._publishEvent({type:"loadWithFrames",custom:true});}}};P.addEventListener(ai,"load",function(){aj._registerModuleEventsDelayed();});if(P.isLegacyIE&&S(ai)){af=P.getIFrameWindow(ai);P.addEventListener(af.document,"readystatechange",function(){aj._registerModuleEventsDelayed();});}})(aa,Y,ad);}}}
R.clearCache=function(){if(T){T.clear();T=null;}};return R;})(),_buildToken4currentTarget:function(S){var T=S.nativeEvent?S.nativeEvent.currentTarget:null,R=T?n.ElementData.prototype.examineID(T):{id:S.target?S.target.id:null,idType:S.target?S.target.idType:-1};return S.type+"|"+R.id+R.idType;},_buildToken4delegateTarget:function(R,T,S){return R+"|"+T+"|"+S;},_buildToken4bubbleTarget:function(S,X,W,aa){var V=t._getLocalTop(),R,ab=function(ac){var ad=null;if(t._hasSameOrigin(R.parent)){P.forEach(a.queryAll("iframe, frame",R.parent.document),function(ae){var af=null;if(!w(ae)){af=P.getIFrameWindow(ae);if(t._hasSameOrigin(af)&&af.document===ac){ad=ae;}}});}
return ad;},Y=P.getDocument(X),Z=null,U,T=S;if(Y){R=Y.defaultView||Y.parentWindow;}
if(X===window||X===window.window){T+="|null-2|window";}else{if(W&&R&&t._hasSameOrigin(R.parent)&&typeof Y!=="undefined"&&V.document!==Y){Z=ab(Y);if(Z){U=n.ElementData.prototype.examineID(Z);T+="|"+U.xPath+"-2";}}else{T+="|null-2|document";}}
return T;},_reinitConfig:function(){t._updateModules();},_publishEvent:function(R){var S=null,U=null,X=R.delegateTarget&&R.data?R.data:t._buildToken4currentTarget(R),V=null,Y,Z,ab,T=null,ac=false,ad=false,af=R.delegateTarget||null,ae,W;O=R;if(R.type.match(/^(click|change|blur|mouse|touch)/)){p();B.resetFlushTimer();}
ae=P.getValue(k,"screenviewAutoDetect",true);if(ae){M();}
if((R.type==="load"||R.type==="pageshow")&&!R.nativeEvent.customLoad){O={};return;}
if(R.type==="click"){K=R.target.element;}
if(R.type==="beforeunload"){ac=false;W=P.getTagName(K)==="a"?K:document.activeElement;if(W){if(J(W)){ac=true;}else{P.forEach(k.ieExcludedLinks,function(ag){var ai,ah,aj=a.queryAll(ag);for(ai=0,ah=aj?aj.length:0;ai<ah;ai+=1){if(aj[ai]&&aj[ai]===K){ac=true;break;}}});}}
if(ac){O={};return;}}
if(E.isUnload(R)){Q="unloading";}
if(R.type==="change"&&P.isLegacyIE&&t.getFlavor()==="w3c"&&(R.target.element.type==="checkbox"||R.target.element.type==="radio")){O={};return;}
if(R.type==="propertychange"){if(R.nativeEvent.propertyName==="checked"&&(R.target.element.type==="checkbox"||(R.target.element.type==="radio"&&R.target.element.checked))){R.type="change";R.target.type="INPUT";}else{O={};return;}}
if(R.target&&N(R.target.element)){O={};return;}
if(!s.hasOwnProperty(X)){if(R.hasOwnProperty("nativeEvent")){ab=R.nativeEvent.currentTarget||R.nativeEvent.target;}
X=t._buildToken4bubbleTarget(R.type,ab,true,af);}
if(s.hasOwnProperty(X)){V=s[X];for(Y=0,Z=V.length;Y<Z;Y+=1){S=V[Y];U=t.getModule(S);T=P.mixin({},R);if(U&&t.isStarted(S)&&typeof U.onevent==="function"){ad=E.canPublish(S,T);if(ad){try{U.onevent(T);}catch(aa){}}}}}
if(T&&T.type==="unload"&&ad){t.destroy(false,T.type);}
O={};},_getLocalTop:function(){return window.window;},addModule:function(R,S){u[R]={creator:S,instance:null,context:null,messages:[]};if(this.isInitialized()){this.start(R);}},getModule:function(R){if(u[R]&&u[R].instance){return u[R].instance;}
return null;},removeModule:function(R){this.stop(R);delete u[R];},isStarted:function(R){return u.hasOwnProperty(R)&&u[R].instance!==null;},start:function(S){var T=u[S],R=null;if(T&&T.instance===null){T.context=new TLT.ModuleContext(S,this);R=T.instance=T.creator(T.context);if(typeof R.init==="function"){R.init();}}},startAll:function(){var R=null;for(R in u){if(u.hasOwnProperty(R)){this.start(R);}}},stop:function(S){var T=u[S],R=null;if(T&&T.instance!==null){R=T.instance;if(typeof R.destroy==="function"){R.destroy();}
T.instance=T.context=null;}},stopAll:function(){var R=null;for(R in u){if(u.hasOwnProperty(R)){this.stop(R);}}},addService:function(S,R){o[S]={creator:R,instance:null};},getService:function(R){if(o.hasOwnProperty(R)){if(!o[R].instance){try{o[R].instance=o[R].creator(this);if(typeof o[R].instance.init==="function"){o[R].instance.init();}}catch(S){P.clog("UIC terminated due to error when instanciating the "+
R+
" service.");throw S;}
if(typeof o[R].instance.getServiceName!=="function"){o[R].instance.getServiceName=function(){return R;};}}
return o[R].instance;}
return null;},removeService:function(R){delete o[R];},broadcast:function(S){var T,R;if(S&&typeof S==="object"){for(T in u){if(u.hasOwnProperty(T)){R=u[T];if(P.indexOf(R.messages,S.type)>-1){if(typeof R.instance.onmessage==="function"){R.instance.onmessage(S);}}}}}},listen:function(R,T){var S=null;if(this.isStarted(R)){S=u[R];if(P.indexOf(S.messages,T)===-1){S.messages.push(T);}}},fail:function(T,S,R){T="UIC FAILED. "+T;try{t.destroy(!!R,T);}catch(U){P.clog(T);}
throw new t.UICError(T,S);},UICError:(function(){function R(S,T){this.message=S;this.code=T;}
R.prototype=new Error();R.prototype.name="UICError";R.prototype.constructor=R;return R;})(),getFlavor:function(){return "w3c";},isCrossOrigin:function(T,S){var U=false,V,R;S=S||window.location.origin;if(!T||!S){return U;}
R=T.match(/^\/\//);if(T.match(/^\//)&&!R){U=false;}else{if(R||T.indexOf("://")!==-1){if(R){V=S.indexOf("://");if(V!==-1){S=S.substring(V+1);}}
if(T.length<S.length){U=true;}else{U=S!==T.substring(0,S.length)||(T.length>S.length&&T.charAt(S.length)!=="/");}}else{U=false;}}
return U;}};p=function(){var T=null,S=P.getValue(k,"inactivityTimeout",600000);if(!S){p=function(){};return;}
function R(){t.destroy(false,"inactivity");}
p=function(){if(T){clearTimeout(T);T=null;}
T=setTimeout(R,S);};p();};function h(V){var R,S,U,T;if(!localStorage||!V){return;}
U=localStorage.getItem(V);if(U){S=U.split("|");R=parseInt(S[0],10);if(Date.now()>R){localStorage.removeItem(V);}else{T=S[1];}}
return T;}
L=function(S,ag){var T,ad,Y,U,ah,R,W,af=null,X,V,Z,ae,aa;if(l){return;}
if(TLT&&TLT.replay){return;}
m=t.getService("config");m.updateConfig(S);k=m.getCoreConfig();V=C(k.blockedUserAgents,navigator.userAgent);if(V){TLT.terminationReason="blockedUA: "+V;return;}
d=t.getService("ajax");P.browserBaseService=n=t.getService("browserBase");P.browserService=a=t.getService("browser");H=t.getService("domCapture");B=t.getService("queue");r=t.getService("serializer");T=m.getModuleConfig("TLCookie")||{};U=T.sessionizationCookieName||"TLTSID";ah=P.getCookieValue("TLTSID");if(ah==="DND"){if(Q!=="destroyed"){t.destroy(false,"killswitch");}
return;}
ah=P.getCookieValue(U)||h(U);if(!ah){U=T.wcxCookieName||"WCXSID";ah=P.getCookieValue(U);}
if(!t._updateModules()){if(Q!=="destroyed"){t.destroy(false,"modules init");}
return;}
c=t.getModule("dataLayer");if(m.subscribe){m.subscribe("configupdated",t._reinitConfig);}
l=true;Q="loaded";try{if(typeof TLFExtensionNotify==="function"){TLFExtensionNotify("Initialized");}}catch(ac){}
ad=t.getServiceConfig("queue");Y=ad.queues||[];if(P.isLegacyIE||P.isIE9){af=P.getOriginAndPath().origin;}
for(X=0;X<Y.length;X+=1){if(af&&t.isCrossOrigin(Y[X].endpoint,af)){t.setAutoFlush(false);t.destroy(false,"CORS not supported");return;}
if(!ah&&T.tlAppKey){R=Y[X].endpoint;W=Y[X].killswitchURL||(R.match("collectorPost")?R.replace("collectorPost","switch/"+T.tlAppKey):null);if(W){d.sendRequest({type:"GET",url:W,async:true,timeout:5000,oncomplete:function(ai){if(ai.responseText==="0"||ai.data===0){t.setAutoFlush(false);P.setCookie("TLTSID","DND");t.destroy(false,"killswitch");}}});}}
if(Y[X].checkEndpoint&&!ad.asyncReqOnUnload){ad.asyncReqOnUnload=true;d.sendRequest({oncomplete:function(ai){if(ai.success){ad.asyncReqOnUnload=false;}},timeout:Y[X].endpointCheckTimeout||3000,url:Y[X].endpoint,headers:{"X-PageId":y,"X-Tealeaf-SaaS-AppKey":T.tlAppKey,"X-Tealeaf-EndpointCheck":true},async:true,error:function(ai){if(ai.success){return;}
ad.endpointCheckFailed=true;}});}}
aa=function(ak){var aj,ai;aj={type:"load",target:window.window,srcElement:window.window,currentTarget:window.window,bubbles:true,cancelBubble:false,cancelable:true,timeStamp:+new Date(),customLoad:true};ai=new n.WebEvent(aj);t._publishEvent(ai);if(ak){a.unsubscribe(Z,ae,aa);}};if(k.screenviewLoadEvent){Z=k.screenviewLoadEvent.name;ae=k.screenviewLoadEvent.target||window;a.subscribe(Z,ae,aa);}else{aa();}
if(t.isInitialized()){Q="initialized";p();z=function(ai){if(ai.type==="mousemove"){v=true;}
a.unsubscribe("mousemove",document,z);z=null;};a.subscribe("mousemove",document,z,{once:true});}
if(typeof j==="function"){try{j(Q);}catch(ab){P.clog("Error in callback.",ab);}}};(function(){var S=null,T,R;for(S in g){if(g.hasOwnProperty(S)){for(T=0,R=g[S].length;T<R;T+=1){(function(V,U){t[U]=function(){var W=this.getService(V);if(W){return W[U].apply(W,arguments);}};})(S,g[S][T]);}}}})();return t;})();(function(){var a=window.navigator.userAgent.toLowerCase(),k=a.indexOf("msie")!==-1||a.indexOf("trident")!==-1,b=(function(){var l=!!window.performance;return k&&(!l||document.documentMode<9);})(),e=(function(){return k&&document.documentMode===9;})(),f=a.indexOf("android")!==-1,h=/(ipad|iphone|ipod)/.test(a),c=a.indexOf("opera mini")!==-1,g=a.indexOf("chrome")===-1&&a.indexOf("safari")!==-1,j=1,d={"a:":"link","button:button":"button","button:submit":"button","input:button":"button","input:checkbox":"checkBox","input:color":"colorPicker","input:date":"datePicker","input:datetime":"datetimePicker","input:datetime-local":"datetime-local","input:email":"emailInput","input:file":"fileInput","input:image":"button","input:month":"month","input:number":"numberPicker","input:password":"textBox","input:radio":"radioButton","input:range":"slider","input:reset":"button","input:search":"searchBox","input:submit":"button","input:tel":"tel","input:text":"textBox","input:time":"timePicker","input:url":"urlBox","input:week":"week","select:":"selectList","select:select-one":"selectList","textarea:":"textBox","textarea:textarea":"textBox"},i={isIE:k,isLegacyIE:b,isIE9:e,isAndroid:f,isLandscapeZeroDegrees:false,isiOS:h,isOperaMini:c,isSafari:g,isUndefOrNull:function(l){return typeof l==="undefined"||l===null;},isArray:function(l){return!!(l&&Object.prototype.toString.call(l)==="[object Array]");},getSerialNumber:function(){var l;l=j;j+=1;return l;},getRandomString:function(q,p){var o,n,l="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",m="";if(!q){return m;}
if(typeof p!=="string"){p=l;}
for(o=0,n=p.length;o<q;o+=1){m+=p.charAt(Math.floor(Math.random()*n));}
return m;},getValue:function(q,p,m){var o,l,n;m=typeof m==="undefined"?null:m;if(!q||typeof q!=="object"||typeof p!=="string"){return m;}
n=p.split(".");for(o=0,l=n.length;o<l;o+=1){if(this.isUndefOrNull(q)||typeof q[n[o]]==="undefined"){return m;}
q=q[n[o]];}
return q;},indexOf:function(o,n){var m,l;if(o&&o.indexOf){return o.indexOf(n);}
if(o&&o instanceof Array){for(m=0,l=o.length;m<l;m+=1){if(o[m]===n){return m;}}}
return-1;},forEach:function(p,o,n){var m,l;if(!p||!p.length||!o||!o.call){return;}
for(m=0,l=p.length;m<l;m+=1){o.call(n,p[m],m,p);}},some:function(p,o){var m,l,n=false;for(m=0,l=p.length;m<l;m+=1){n=o(p[m],m,p);if(n){return n;}}
return n;},convertToArray:function(n){var o=0,m=n.length,l=[];while(o<m){l.push(n[o]);o+=1;}
return l;},mixin:function(p){var o,n,m,l;for(m=1,l=arguments.length;m<l;m+=1){n=arguments[m];for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){p[o]=n[o];}}}
return p;},extend:function(l,m,n){var o="";for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){if(l&&Object.prototype.toString.call(n[o])==="[object Object]"){if(typeof m[o]==="undefined"){m[o]={};}
this.extend(l,m[o],n[o]);}else{m[o]=n[o];}}}
return m;},clone:function(m){var n,l;if(null===m||"object"!==typeof m){return m;}
if(m instanceof Object){n=Object.prototype.toString.call(m)==="[object Array]"?[]:{};for(l in m){if(Object.prototype.hasOwnProperty.call(m,l)){n[l]=this.clone(m[l]);}}
return n;}},parseVersion:function(n){var o,l,m=[];if(!n||!n.length){return m;}
m=n.split(".");for(o=0,l=m.length;o<l;o+=1){m[o]=/^[0-9]+$/.test(m[o])?parseInt(m[o],10):m[o];}
return m;},isEqual:function(n,m){var o,p,r,q,l;if(n===m){return true;}
if(typeof n!==typeof m){return false;}
if(n instanceof Object&&m instanceof Object){if(Object.prototype.toString.call(n)==="[object Array]"&&Object.prototype.toString.call(m)==="[object Array]"){if(n.length!==m.length){return false;}
for(o=0,l=n.length;o<l;o+=1){if(!this.isEqual(n[o],m[o])){return false;}}
return true;}
if(Object.prototype.toString.call(n)==="[object Object]"&&Object.prototype.toString.call(m)==="[object Object]"){for(o=0;o<2;o+=1){for(r in n){if(n.hasOwnProperty(r)){if(!m.hasOwnProperty(r)){return false;}
p=this.isEqual(n[r],m[r]);if(!p){return false;}}}
q=n;n=m;m=q;}
return true;}}
return false;},calculateRelativeXY:function(n){if(i.isUndefOrNull(n)||i.isUndefOrNull(n.x)||i.isUndefOrNull(n.y)||i.isUndefOrNull(n.width)||i.isUndefOrNull(n.height)){return "0.5,0.5";}
var m=Math.abs(n.x/n.width).toFixed(4),l=Math.abs(n.y/n.height).toFixed(4);m=m>1||m<0?0.5:m;l=l>1||l<0?0.5:l;return m+","+l;},createObject:(function(){var l=null,m=null;if(typeof Object.create==="function"){l=Object.create;}else{m=function(){};l=function(n){if(typeof n!=="object"&&typeof n!=="function"){throw new TypeError("Object prototype need to be an object!");}
m.prototype=n;return new m();};}
return l;})(),access:function(q,o){var p=o||window,m,n,l;if(typeof q!=="string"||typeof p!=="object"){return;}
m=q.split(".");for(n=0,l=m.length;n<l;n+=1){if(n===0&&m[n]==="window"){continue;}
if(!Object.prototype.hasOwnProperty.call(p,m[n])){return;}
p=p[m[n]];if(n<l-1&&!(p instanceof Object)){return;}}
return p;},isNumeric:function(l){var m=false;if(i.isUndefOrNull(l)||!/\S/.test(l)){return m;}
m=!isNaN(l*2);return m;},isUpperCase:function(l){return l===l.toUpperCase()&&l!==l.toLowerCase();},isLowerCase:function(l){return l===l.toLowerCase()&&l!==l.toUpperCase();},extractResponseHeaders:function(n){var p={},m,l,o=null;if(!n||!n.length){n=[];}else{n=n.split("\n");}
for(m=0,l=n.length;m<l;m+=1){o=n[m].split(": ");if(o.length===2){p[o[0]]=o[1];}}
return p;},getTargetState:function(s){var q={a:["innerText","href"],input:{range:["maxValue:max","value"],checkbox:["value","checked"],radio:["value","checked"],image:["src"]},select:["value"],button:["value","innerText"],textarea:["value"]},o=this.getTagName(s),n=q[o]||null,p=null,r=null,m=null,l="";if(n!==null){if(Object.prototype.toString.call(n)==="[object Object]"){n=n[s.type]||["value"];}
r={};for(l in n){if(n.hasOwnProperty(l)){if(n[l].indexOf(":")!==-1){m=n[l].split(":");r[m[0]]=s[m[1]];}else{if(n[l]==="innerText"){r[n[l]]=this.trim(s.innerText||s.textContent);}else{r[n[l]]=s[n[l]];}}}}}
if(o==="select"&&s.options&&!isNaN(s.selectedIndex)){r=r||{};r.index=s.selectedIndex;if(r.index>=0&&r.index<s.options.length){p=s.options[s.selectedIndex];r.value=p.getAttribute("value")||p.getAttribute("label")||p.text||p.innerText;r.text=p.text||p.innerText;}}
if(r&&s.disabled){r.disabled=true;}
return r;},getDocument:function(l){var m=l;if(l&&l.nodeType!==9){if(l.getRootNode){m=l.getRootNode();}else{m=l.ownerDocument||l.document;}}
return m;},getWindow:function(m){try{if(m.self!==m){var l=i.getDocument(m);return!i.isUndefOrNull(l.defaultView)?l.defaultView:l.parentWindow;}}catch(n){m=null;}
return m;},getOriginAndPath:function(t){var o={},v,w,r,u,s,l=[],m={},p,n;t=t||window.location;if(t.origin){o.origin=t.origin;}else{o.origin=(t.protocol||"")+"//"+(t.host||"");}
o.path=(t.pathname||"").split(";",1)[0];if(o.origin.indexOf("file://")>-1||(i.isiOS&&window.Ionic)){v=o.path.match(/(.*)(\/.*app.*)/);if(v!==null){o.path=v[2];o.origin="file://";}}
w=t.search||"";try{r=new URLSearchParams(w);r.forEach(function(x,y){m[y]=x;});}catch(q){if(w.length>1&&w.charAt(0)==="?"){l=decodeURIComponent(w).substring(1).split("&");}
for(p=0;p<l.length;p+=1){n=l[p].indexOf("=");if(n>-1){u=l[p].substring(0,n);s=l[p].substring(n+1);m[u]=s;}}}
o.queryParams=m;return o;},getIFrameWindow:function(n){var l=null;if(!n){return l;}
try{l=n.contentWindow||(n.contentDocument?n.contentDocument.parentWindow:null);}catch(m){}
return l;},getTagName:function(m){var l="";if(i.isUndefOrNull(m)){return l;}
if(m===document||m.nodeType===9){l="document";}else{if(m===window||m===window.window){l="window";}else{if(typeof m==="string"){l=m.toLowerCase();}else{l=(m.tagName||m.nodeName||"").toLowerCase();}}}
return l;},getTlType:function(n){var l,m,o="";if(i.isUndefOrNull(n)||!n.type){return o;}
l=n.type.toLowerCase();m=l+":";if(n.subType){m+=n.subType.toLowerCase();}
o=d[m]||l;return o;},isIFrameDescendant:function(m){var l=i.getWindow(m);return l?l!=TLT._getLocalTop():false;},getOrientationMode:function(l){var m="INVALID";if(typeof l!=="number"){return m;}
switch(l){case 0:case 180:case 360:m="PORTRAIT";break;case 90:case-90:case 270:m="LANDSCAPE";break;default:m="UNKNOWN";break;}
return m;},getOrientationAngle:function(){if(typeof window.orientation==="number"){return window.orientation;}
var l=(screen.orientation||{}).angle;if(typeof l!=="number"){switch(screen.mozOrientation||screen.msOrientation){case "landscape-primary":case "landscape-secondary":l=90;break;default:l=0;break;}}
return l;},clog:(function(l){return function(){};})(window),trim:function(l){if(!l||!l.toString){return l;}
if(l.trim){return l.trim();}
return l.toString().replace(/^\s+|\s+$/g,"");},ltrim:function(l){if(!l||!l.toString){return l;}
if(l.trimStart){return l.trimStart();}
return l.toString().replace(/^\s+/,"");},rtrim:function(l){if(!l||!l.toString){return l;}
if(l.trimEnd){return l.trimEnd();}
return l.toString().replace(/\s+$/,"");},setCookie:function(w,m,u,z,q,l,t){var r,s,p,o,n="",y,v,x;if(t==="None"){l=true;}else{if(t!=="Lax"){t="Strict";}}
x=";SameSite="+t;v=l?";Secure":"";if(!w){return;}
w=encodeURIComponent(w);m=encodeURIComponent(m);p=(q||location.hostname).split(".");y=";Path="+(z||"/");if(typeof u==="number"){if(this.isIE){o=new Date();o.setTime(o.getTime()+u*1000);n=";Expires="+o.toUTCString();}else{n=";Max-Age="+u;}}
for(s=p.length,r=s===1?1:2;r<=s;r+=1){document.cookie=w+"="+m+";Domain="+p.slice(-r).join(".")+y+n+v+x;if(this.getCookieValue(w)===m){break;}
if(s===1){document.cookie=w+"="+m+y+n+v+x;}}},getCookieValue:function(r,t){var o,p,n,s,m=null,l;try{t=t||document.cookie;if(!r||!r.toString){return null;}
r+="=";l=r.length;s=t.split(";");for(o=0,p=s.length;o<p;o+=1){n=s[o];n=i.ltrim(n);if(n.indexOf(r)===0){m=n.substring(l,n.length);break;}}}catch(q){m=null;}
return m;},getQueryStringValue:function(p,s,l){var o,n,t,m=null,q;try{l=l||window.location.search;t=l.length;if(!p||!p.toString||!t){return null;}
s=s||"&";l=s+l.substring(1);p=s+p+"=";o=l.indexOf(p);if(o!==-1){q=o+p.length;n=l.indexOf(s,q);if(n===-1){n=t;}
m=decodeURIComponent(l.substring(q,n));}}catch(r){}
return m;},addEventListener:(function(){if(window.addEventListener){return function(m,l,n){m.addEventListener(l,n,false);};}
return function(m,l,n){m.attachEvent("on"+l,n);};})(),matchTarget:function(v,r){var p,n,o,u=-1,t,l,m,q,s,w=document;if(!v||!r){return u;}
if(!this.browserService||!this.browserBaseService){this.browserService=TLT.getService("browser");this.browserBaseService=TLT.getService("browserBase");}
if(r.idType===-2){o=this.browserBaseService.getNodeFromID(r.id,r.idType);w=this.getDocument(o);}
for(p=0,q=v.length;p<q&&u===-1;p+=1){s=v[p];if(typeof s==="string"){t=this.browserService.queryAll(s,w);for(n=0,l=t?t.length:0;n<l;n+=1){if(t[n]){m=this.browserBaseService.ElementData.prototype.examineID(t[n]);if(m.idType===r.idType&&m.id===r.id){u=p;break;}}}}else{if(s&&s.id&&s.idType&&r.idType&&r.idType.toString()===s.idType.toString()){switch(typeof s.id){case "string":if(s.id===r.id){u=p;}
break;case "object":if(!s.cRegex){s.cRegex=new RegExp(s.id.regex,s.id.flags);}
s.cRegex.lastIndex=0;if(s.cRegex.test(r.id)){u=p;}
break;}}}}
return u;},WeakMap:(function(){function l(p,o){var n,m;p=p||[];for(n=0,m=p.length;n<m;n+=1){if(p[n][0]===o){return n;}}
return-1;}
return function(){var m=[];this.set=function(o,p){var n=l(m,o);m[n>-1?n:m.length]=[o,p];};this.get=function(o){var n=m[l(m,o)];return n?n[1]:undefined;};this.clear=function(){m=[];};this.has=function(n){return l(m,n)>=0;};this.remove=function(o){var n=l(m,o);if(n>=0){m.splice(n,1);}};this["delete"]=this.remove;};})()};if(typeof TLT==="undefined"||!TLT){window.TLT={};}
TLT.utils=i;})();(function(){TLT.EventTarget=function(){this._handlers={};};TLT.EventTarget.prototype={constructor:TLT.EventTarget,publish:function(c,f){var d=0,a=0,b=this._handlers[c],e={type:c,data:f};if(typeof b!=="undefined"){for(a=b.length;d<a;d+=1){b[d](e);}}},subscribe:function(a,b){if(!this._handlers.hasOwnProperty(a)){this._handlers[a]=[];}
this._handlers[a].push(b);},unsubscribe:function(c,e){var d=0,a=0,b=this._handlers[c];if(b){for(a=b.length;d<a;d+=1){if(b[d]===e){b.splice(d,1);return;}}}}};})();TLT.ModuleContext=(function(){var a=["broadcast","getConfig:getModuleConfig","listen","post","getXPathFromNode","performDOMCapture","performFormCompletion","isInitialized","getStartTime","normalizeUrl","getCurrentOffset","getTabId","setSessionCookieInfo"];return function(f,d){var h={},g,b,j=null,e=null,c=null;for(g=0,b=a.length;g<b;g+=1){j=a[g].split(":");if(j.length>1){c=j[0];e=j[1];}else{c=j[0];e=j[0];}
h[c]=(function(i){return function(){var k=d.utils.convertToArray(arguments);k.unshift(f);return d[i].apply(d,k);};})(e);}
h.utils=d.utils;return h;};})();TLT.addService("config",function(a){function d(f,e){a.utils.extend(true,f,e);c.publish("configupdated",c.getConfig());}
var b={core:{},modules:{},services:{}},c=a.utils.extend(false,a.utils.createObject(new TLT.EventTarget()),{getConfig:function(){return b;},updateConfig:function(e){d(b,e);},getCoreConfig:function(){return b.core;},updateCoreConfig:function(e){d(b.core,e);},getServiceConfig:function(e){return b.services[e]||{};},updateServiceConfig:function(f,e){if(typeof b.services[f]==="undefined"){b.services[f]={};}
d(b.services[f],e);},getModuleConfig:function(e){return b.modules[e]||{};},updateModuleConfig:function(f,e){if(typeof b.modules[f]==="undefined"){b.modules[f]={};}
d(b.modules[f],e);},destroy:function(){b={core:{},modules:{},services:{}};}});return c;});TLT.addService("queue",function(r){var M=r.utils,k=null,i={},G=600000,p=r.getService("ajax"),c=r.getService("browser"),e=r.getService("encoder"),v=r.getService("serializer"),E=r.getService("config"),s=r.getService("message"),A=null,m={},J=true,h=true,z={5:{limit:300,count:0},6:{limit:400,count:0}},d=[],C=false,q=true,I=true,u=(function(){var S={};function V(W){return typeof S[W]!=="undefined";}
function O(W,X){if(!V(W)){S[W]={lastOffset:0,data:[],queueId:W,url:X.url,eventThreshold:X.eventThreshold,sizeThreshold:X.sizeThreshold||0,timerInterval:X.timerInterval,size:-1,serializer:X.serializer,encoder:X.encoder,crossDomainEnabled:!!X.crossDomainEnabled,crossDomainIFrame:X.crossDomainIFrame};}
return S[W];}
function Q(W){if(V(W)){delete S[W];}}
function T(W){if(V(W)){return S[W];}
return null;}
function R(X){var W=T(X);if(W!==null){W.data=[];}}
function U(W){var X=null;if(V(W)){X=T(W).data;R(W);}
return X;}
function P(Y,aa){var W=null,Z=null,ac=window.tlBridge,X=window.iOSJSONShuttle;try{Z=v.serialize(aa);}catch(ab){Z="Serialization failed: "+
(ab.name?ab.name+" - ":"")+
ab.message;aa={error:Z};}
if(typeof ac!=="undefined"&&typeof ac.addMessage==="function"){ac.addMessage(Z);}else{if(typeof X!=="undefined"&&typeof X==="function"){X(Z);}else{if(V(Y)){W=T(Y);W.data.push(aa);W.data=r.redirectQueue(W.data);if(W.sizeThreshold){Z=v.serialize(W.data);W.size=Z.length;}
return W.data.length;}}}
return 0;}
return{exists:V,add:O,remove:Q,reset:function(){S={};},get:T,clear:R,flush:U,push:P};})();function n(O){if(q){I=true;}
if(O&&O.id){M.extend(true,d[O.id-1],{rspEnd:s.getCurrentOffset(),success:O.success,statusCode:O.statusCode,statusText:O.statusText});}}
function x(){var O=M.getOriginAndPath(window.location);return r.normalizeUrl("",O.path);}
function B(Q,U,R,T){var O=u.get(Q),S={name:U,value:R},P=null;if(typeof U!=="string"||typeof R!=="string"){return;}
if(!O.headers){O.headers={once:[],always:[]};}
P=!!T?O.headers.always:O.headers.once;P.push(S);}
function g(Q,T){var S,P,O=u.get(Q),U=O.headers,R=null;T=T||{};function V(W,Z){var Y,X,aa=null;for(Y=0,X=W.length;Y<X;Y+=1){aa=W[Y];Z[aa.name]=aa.value;}}
if(U){R=[U.always,U.once];for(S=0,P=R.length;S<P;S+=1){V(R[S],T);}}
return T;}
function o(P){var O=null,Q=null;if(!u.exists(P)){throw new Error("Queue: "+P+" does not exist!");}
O=u.get(P);Q=O?O.headers:null;if(Q){Q.once=[];}}
function l(){var P=0,O,R,Q=r.provideRequestHeaders();if(Q&&Q.length){for(P=0,O=Q.length;P<O;P+=1){R=Q[P];B("DEFAULT",R.name,R.value,R.recurring);}}
return P;}
function L(S){var R,O,Q=[],P="";if(!S||!S.length){return P;}
for(R=0,O=S.length;R<O;R+=1){Q[S[R].type]=true;}
for(R=0,O=Q.length;R<O;R+=1){if(Q[R]){if(P){P+=",";}
P+=R;}}
return P;}
function j(af,U){var Y=u.get(af),ah=Y.url?u.flush(af):null,R=ah?ah.length:0,T={"Content-Type":"application/json","X-PageId":r.getPageId(),"X-Tealeaf":"device (UIC) Lib/6.2.0.2010","X-TealeafType":"GUI","X-TeaLeaf-Page-Url":x(),"X-Tealeaf-SyncXHR":(!!U).toString()},S=null,O=s.getCurrentOffset(),ad=Y.serializer||"json",P=Y.encoder,ab,V,X,W=k.tltWorker,ag=r.getState()==="unloading",aa=M.getOriginAndPath().origin,Q=r.isCrossOrigin(Y.url,aa),Z,ae=null;if(!R||!Y){return;}
X=O-ah[R-1].offset;if(G&&X>G+60000){return;}
I=false;Y.lastOffset=ah[R-1].offset;T["X-Tealeaf-MessageTypes"]=L(ah);ah=s.wrapMessages(ah);S=ah.serialNumber;d[S-1]={serialNumber:S,reqStart:O};ah.log={requests:d};if(k.endpointCheckFailed){ah.log.endpointCheckFailed=true;}
l();g(af,T);if(W&&!(U||ag)){W.onmessage=function(aj){var ai;ai=aj.data;n(ai);};Z={id:S,url:Y.url,headers:T,data:ah,isUnloading:ag,isCrossOrigin:Q};W.postMessage(Z);}else{if(ad){ah=v.serialize(ah,ad);}
if(P){V=e.encode(ah,P);if(V){if(V.data&&!V.error){if(!(V.data instanceof window.ArrayBuffer)){V.error="Encoder did not apply "+P+" encoding.";}else{if(V.data.byteLength<ah.length){ah=V.data;T["Content-Encoding"]=V.encoding;}else{V.error=P+
" encoder did not reduce payload ("+
V.data.byteLength+
") compared to original data ("+
ah.length+
")";}}}
if(V.error){r.logExceptionEvent("EncoderError: "+V.error,"UIC",-1);}}}
if(Y.crossDomainEnabled){ae=M.getIFrameWindow(Y.crossDomainIFrame);if(!ae){return;}
ab={request:{id:S,url:Y.url,async:!U,headers:T,data:ah}};if(typeof window.postMessage==="function"){ae.postMessage(ab,Y.crossDomainIFrame.src);}else{try{ae.sendMessage(ab);}catch(ac){return;}}
I=true;}else{p.sendRequest({id:S,oncomplete:n,url:Y.url,async:!U,isUnloading:ag,isCrossOrigin:Q,headers:T,data:ah});}}
o(af);}
function K(R){var O=null,Q=k.queues,P;for(P=0;P<Q.length;P+=1){O=Q[P];j(O.qid,R);}
return true;}
function N(R,T){var Q,P,U=s.createMessage(T),O=u.get(R),S,V;P=O.data.length;if(P){V=U.offset-O.data[P-1].offset;if(G&&V>G){r.setAutoFlush(false);r.destroy(false,"inactivity(2)");return;}}
P=u.push(R,U);S=O.size;if(q&&!I){return;}
if((P>=O.eventThreshold||S>=O.sizeThreshold)&&J&&r.getState()!=="unloading"){Q=r.getCurrentWebEvent();if(Q.type==="click"&&!k.ddfoc){if(h){h=false;window.setTimeout(function(){if(u.exists(R)){j(R);h=true;}},500);}}else{j(R);}}}
function a(Q){var O,P=false;if(!Q||!Q.type){return true;}
O=z[Q.type];if(O){O.count+=1;if(O.count>O.limit){P=true;if(O.count===O.limit+1){N("DEFAULT",{type:16,dataLimit:{messageType:Q.type,maxCount:O.limit}});}}}
return P;}
function H(Q){var S,P,O=null,T=k.queues,R="",V,U;for(S=0,V=T.length;S<V;S+=1){O=T[S];if(O&&O.modules){for(P=0,U=O.modules.length;P<U;P+=1){R=O.modules[P];if(R===Q){return O.qid;}}}}
return A.qid;}
function y(Q,O){m[Q]=window.setTimeout(function P(){if(J&&(!q||(q&&I))){j(Q);}
m[Q]=window.setTimeout(P,O);},O);}
function f(P){var O=false;if(P&&m[P]){window.clearTimeout(m[P]);delete m[P];O=true;}
return O;}
function w(){var O=0;for(O in m){if(m.hasOwnProperty(O)){f(O);}}
m={};}
function b(P){var O;if(!P){return;}
if(f(P)){O=u.get(P);if(O.timerInterval){y(P,O.timerInterval);}}}
function F(O){}
function t(O){k=O;i=r.getCoreConfig();G=M.getValue(i,"inactivityTimeout",600000);q=M.getValue(k,"serializePost",true);M.forEach(k.queues,function(P,Q){var R=null;if(P.qid==="DEFAULT"){A=P;}
if(P.crossDomainEnabled){R=c.query(P.crossDomainFrameSelector);if(!R){r.fail("Cross domain iframe not found");}}
u.add(P.qid,{url:P.endpoint,eventThreshold:P.maxEvents,sizeThreshold:P.maxSize||0,serializer:P.serializer,encoder:P.encoder,timerInterval:P.timerInterval||0,crossDomainEnabled:P.crossDomainEnabled||false,crossDomainIFrame:R});if(typeof P.timerInterval!=="undefined"&&P.timerInterval>0){y(P.qid,P.timerInterval);}});E.subscribe("configupdated",F);C=true;}
function D(){if(J){K(!k.asyncReqOnUnload);}
E.unsubscribe("configupdated",F);w();u.reset();k=null;A=null;C=false;}
return{init:function(){if(!C){t(E.getServiceConfig("queue")||{});}else{}},destroy:function(){D();},_getQueue:function(O){return u.get(O).data;},setAutoFlush:function(O){if(O===true){J=true;}else{J=false;}},flush:function(O){O=O||A.qid;if(!u.exists(O)){throw new Error("Queue: "+O+" does not exist!");}
j(O);},flushAll:function(O){return K(!!O);},post:function(P,Q,O){if(!r.isInitialized()){return;}
O=O||H(P);if(!u.exists(O)){return;}
if(!a(Q)){N(O,Q);}},resetFlushTimer:function(O){O=O||A.qid;if(!u.exists(O)){return;}
b(O);}};});TLT.addService("browserBase",function(u){var j,Q=u.utils,l={optgroup:true,option:true,nobr:true},s={},h,p=null,F,B,i,f,A,t,K=false,c=5,z=60;function v(){h=u.getService("config");p=u.getService("serializer");F=h?h.getServiceConfig("browser"):{};B=F.blacklist||[];i=F.customid||[];f=Q.getValue(F,"normalizeTargetToParentLink",true);A=Q.getValue(F,"logAttributes",[]);}
function d(){v();if(h){h.subscribe("configupdated",v);}
K=true;}
function L(){if(h){h.unsubscribe("configupdated",v);}
K=false;}
function a(X){var V,R,U,T,W,S={};if(!X||!X.hasAttribute){return S;}
for(V=0,R=A.length,W=0;V<R&&W<c;V+=1){U=A[V];if(X.hasAttribute(U)){T=X.getAttribute(U)||"";S[U]=T.slice(0,z);W+=1;}}
return S;}
function y(T,V){var S,R,U;if(!T){return null;}
if(typeof V!=="undefined"){U=V;}else{U=T.id;}
if(!U||typeof U!=="string"){return null;}
for(S=0,R=B.length;S<R;S+=1){if(typeof B[S]==="string"){if(U===B[S]){return null;}}else{if(typeof B[S]==="object"){if(!B[S].cRegex){B[S].cRegex=new RegExp(B[S].regex,B[S].flags);}
B[S].cRegex.lastIndex=0;if(B[S].cRegex.test(U)){return null;}}}}
return U;}
function r(T,U){var R={type:null,subType:null},S;if(!T){return R;}
S=T.type;switch(S){case "focusin":S="focus";break;case "focusout":S="blur";break;default:break;}
R.type=S;return R;}
function D(S){var R={type:null,subType:null};if(!S){return R;}
R.type=Q.getTagName(S);R.subType=S.type||null;return R;}
function e(R,T,S){var X={HTML_ID:"-1",XPATH_ID:"-2",ATTRIBUTE_ID:"-3"},W,U=null,V;if(!R||!T){return U;}
W=S||window.document;T=T.toString();if(T===X.HTML_ID){if(W.getElementById){U=W.getElementById(R);}else{if(W.querySelector){U=W.querySelector("#"+R);}}}else{if(T===X.ATTRIBUTE_ID){V=R.split("=");if(W.querySelector){U=W.querySelector("["+V[0]+'="'+V[1]+'"]');}}else{if(T===X.XPATH_ID){U=s.xpath(R,W);}}}
return U;}
t=(function(){var R={nobr:true};return function(Z,W,ae,T){var aa,ah=document.documentElement,V,ag=null,Y=null,ad=null,af=[],S,ac=true,X=u._getLocalTop(),U="",ab=false,ai;if(!Z||!Z.nodeType){return af;}
if(Z.nodeType===11){Z=Z.host;if(Z){ab=true;}else{return af;}}
while(ac){ac=false;U=Q.getTagName(Z);if(U==="window"){continue;}
if(U&&!ab){if(R[U]){Z=Z.parentNode;ac=true;continue;}}
for(V=y(Z,T);Z&&(Z.nodeType===1||Z.nodeType===9)&&Z!==document&&(W||!V);V=y(Z)){ad=Z.parentNode;if(!ad){Y=Q.getWindow(Z);if(!Y||ae){S=[U,0];af[af.length]=S;return af.reverse();}
if(Y===X){return af.reverse();}
Z=Y.frameElement;U=Q.getTagName(Z);ad=Z.parentNode;continue;}
ag=ad.firstChild;if(!ag){af.push(["XPath Error(1)"]);Z=null;break;}
for(aa=0;ag;ag=ag.nextSibling){if(ag.nodeType===1&&Q.getTagName(ag)===U){if(ag===Z){S=[U,aa];if(ab){S.push("h");ab=false;}
af[af.length]=S;break;}
aa+=1;}}
if(ad.nodeType===11){Z=ad.host;ab=true;}else{Z=ad;}
U=Q.getTagName(Z);}
if(V&&!W){S=[V];if(ab){S.push("h");ab=false;}
af[af.length]=S;if(Q.isIFrameDescendant(Z)){ac=true;Z=Q.getWindow(Z).frameElement;}else{if(!ae&&!ah.contains(Z)){if(Z.getRootNode){ai=Z.getRootNode();if(ai){Z=ai.host;ab=true;ac=true;}}}}}
T=undefined;}
return af.reverse();};})();function H(R){var S="null";if(!R||!R.length){return S;}
S=p.serialize(R,"json");return S;}
function x(U,S,W,T){var V,R;R=t(U,!!S,!!T);if(W){V=R;}else{V=H(R);}
return V;}
function P(S){var T={left:-1,top:-1},R;S=S||document;R=S.documentElement||S.body.parentNode||S.body;T.left=Math.round(typeof window.pageXOffset==="number"?window.pageXOffset:R.scrollLeft);T.top=Math.round(typeof window.pageYOffset==="number"?window.pageYOffset:R.scrollTop);return T;}
function O(R){return(R&&typeof R.originalEvent!=="undefined"&&typeof R.isDefaultPrevented!=="undefined"&&!R.isSimulated);}
function m(R){if(!R){return null;}
if(R.type&&R.type.indexOf("touch")===0){if(O(R)){R=R.originalEvent;}
if(R.type==="touchstart"){R=R.touches[R.touches.length-1];}else{if(R.type==="touchend"){R=R.changedTouches[0];}}}
return R;}
function w(S){var X=S||window.event,V,Y=document.documentElement,W=document.body,Z=false,R=null,T,U;if(O(X)){X=X.originalEvent;}
if(typeof S==="undefined"||typeof X.target==="undefined"){X.target=X.srcElement||window.window;X.timeStamp=Number(new Date());if(X.pageX===null||typeof X.pageX==="undefined"){X.pageX=X.clientX+
((Y&&Y.scrollLeft)||(W&&W.scrollLeft)||0)-
((Y&&Y.clientLeft)||(W&&W.clientLeft)||0);X.pageY=X.clientY+
((Y&&Y.scrollTop)||(W&&W.scrollTop)||0)-
((Y&&Y.clientTop)||(W&&W.clientTop)||0);}
X.preventDefault=function(){this.returnValue=false;};X.stopPropagation=function(){this.cancelBubble=true;};}
if(X.type==="click"){V=X.composedPath?X.composedPath():[];for(U=0;U<V.length;U+=1){T=Q.getTagName(V[U]);if(T==="button"){Z=true;R=V[U];break;}}
if(Z){return{originalEvent:X,target:R,srcElement:R,type:X.type,pageX:X.pageX,pageY:X.pageY};}}
return X;}
function C(T){var S,R,U,V=null;if(!T||!T.type){return null;}
if(T.type.indexOf("touch")===0){V=m(T).target;}else{if(typeof T.composedPath==="function"){U=T.composedPath();if(U&&U.length){V=U[0];if(f){for(S=0,R=U.length;S<R;S+=1){if(Q.getTagName(U[S])==="a"){V=U[S];break;}}}}else{V=T.target||window.window;}}else{if(T.srcElement){V=T.srcElement;}else{V=T.target;}}}
while(V&&l[Q.getTagName(V)]){if(V.parentElement){V=V.parentElement;}else{break;}}
if(V.nodeType===9&&V.documentElement){V=V.documentElement;}
return V;}
function N(S){var V=0,U=0,T=document.documentElement,R=document.body;S=m(S);if(S){if(S.pageX||S.pageY){V=S.pageX;U=S.pageY;}else{if(S.clientX||S.clientY){V=S.clientX+
(T?T.scrollLeft:R?R.scrollLeft:0)-
(T?T.clientLeft:R?R.clientLeft:0);U=S.clientY+
(T?T.scrollTop:R?R.scrollTop:0)-
(T?T.clientTop:R?R.clientTop:0);}}}
return{x:V,y:U};}
s.xpath=function(Z,ab){var X=null,S,Y=null,ac=false,R,V,U,T,W,aa;if(!Z){return null;}
X=p.parse(Z);ab=ab||document;S=ab;if(!X){return null;}
for(V=0,W=X.length;V<W&&S;V+=1){Y=X[V];ac=Y.length>1&&Y[Y.length-1]==="h";if(Y.length===1||(Y.length===2&&ac)){if(ab.getElementById){S=ab.getElementById(Y[0]);}else{if(ab.querySelector){S=ab.querySelector("#"+Y[0]);}else{S=null;}}}else{for(U=0,T=-1,aa=S.childNodes.length;U<aa;U+=1){if(S.childNodes[U].nodeType===1&&Q.getTagName(S.childNodes[U])===Y[0].toLowerCase()){T+=1;if(T===Y[1]){S=S.childNodes[U];break;}}}
if(T!==Y[1]){return null;}}
if(!S){return null;}
if(ac){if(V<W-1){if(!S.shadowRoot){return null;}
S=S.shadowRoot;ab=S;}}
R=Q.getTagName(S);if((R==="frame"||R==="iframe")&&V<W-1){S=Q.getIFrameWindow(S).document;ab=S;}}
return S===ab||!S?null:S;};function o(R,S){this.x=Math.round(R||0);this.y=Math.round(S||0);}
function b(S,R){this.width=Math.round(S||0);this.height=Math.round(R||0);}
function g(S,T){var W,V,R,U;T=C(S);W=this.examineID(T);R=D(T);U=this.examinePosition(S,T);V=T&&T.getAttribute?T.getAttribute("aria-label"):null;if(V){this.accessibility={id:V};}
this.attributes=a(T);if(T&&T.innerText){this.attributes.innerText=Q.trim(T.innerText).slice(0,z);}
this.element=T;this.id=W.id;this.idType=W.idType;this.type=R.type;this.subType=R.subType;this.state=this.examineState(T);this.position=new o(U.x,U.y);this.position.relXY=U.relXY;this.size=new b(U.width,U.height);this.xPath=W.xPath;this.name=W.name;}
g.HTML_ID=-1;g.XPATH_ID=-2;g.ATTRIBUTE_ID=-3;g.prototype.examineID=function(Y,T){var W={id:"",idType:0,xPath:"",name:""},S=i.length,V,R,U=document.documentElement;if(!Y){return W;}
W.xPath=x(Y,false,false,T);W.name=Y.name;try{R=typeof U.contains==="function"?U.contains(Y):true;if((T||R)&&(!Q.getWindow(Y)||!Q.isIFrameDescendant(Y))){if(y(Y)){W.id=Y.id;W.idType=g.HTML_ID;}else{if(i.length&&Y.attributes){while(S){S-=1;V=Y.attributes[i[S]];if(typeof V!=="undefined"){W.id=i[S]+"="+(V.value||V);W.idType=g.ATTRIBUTE_ID;}}}}}}catch(X){}
if(!W.id){W.id=W.xPath;if(W.id!=="null"){W.idType=g.XPATH_ID;}}
return W;};g.prototype.examineState=function(R){return Q.getTargetState(R);};function J(){var S=1,T,V,R;if(document.body.getBoundingClientRect){try{T=document.body.getBoundingClientRect();}catch(U){return S;}
V=T.right-T.left;R=document.body.offsetWidth;S=Math.round((V/R)*100)/100;}
return S;}
function q(S){var U,R,T,W;if(!S||!S.getBoundingClientRect){return{x:0,y:0,width:0,height:0};}
try{U=S.getBoundingClientRect();W=P(document);}catch(V){return{x:0,y:0,width:0,height:0};}
R={x:U.left+W.left,y:U.top+W.top,width:U.right-U.left,height:U.bottom-U.top};if(Q.isIE){R.x-=document.documentElement.clientLeft;R.y-=document.documentElement.clientTop;T=J();if(T!==1){R.x=Math.round(R.x/T);R.y=Math.round(R.y/T);R.width=Math.round(R.width/T);R.height=Math.round(R.height/T);}}
return R;}
g.prototype.examinePosition=function(S,T){var U=N(S),R=q(T);R.x=U.x||U.y?Math.round(Math.abs(U.x-R.x)):R.width/2;R.y=U.x||U.y?Math.round(Math.abs(U.y-R.y)):R.height/2;R.relXY=Q.calculateRelativeXY(R);return R;};function M(){var R=Q.getOrientationAngle();if(Q.isLandscapeZeroDegrees){if(Math.abs(R)===180||Math.abs(R)===0){R=90;}else{if(Math.abs(R)===90||Math.abs(R)===270){R=0;}}}
return R;}
function G(X){var U,R,W,V,T,S;if(X){return X;}
W=u.getCoreConfig()||{};T=W.modules;X={};for(S in T){if(T.hasOwnProperty(S)&&T[S].events){for(U=0,R=T[S].events.length;U<R;U+=1){V=T[S].events[U];if(V.state){X[V.name]=V.state;}}}}
return X;}
function k(R){var S;j=G(j);if(j[R.type]){S=Q.getValue(R,j[R.type],null);}
return S;}
function n(S){var U,R,T;this.data=S.data||null;this.delegateTarget=S.delegateTarget||null;if(S.gesture||(S.originalEvent&&S.originalEvent.gesture)){this.gesture=S.gesture||S.originalEvent.gesture;this.gesture.idType=new g(this.gesture,this.gesture.target).idType;}
S=w(S);U=N(S);this.custom=false;this.nativeEvent=this.custom===true?null:S;this.position=new o(U.x,U.y);this.target=new g(S,S.target);this.orientation=M();T=k(S);if(T){this.target.state=T;}
this.timestamp=new Date().getTime();R=r(S,this.target);this.type=R.type;this.subType=R.subType;}
function I(R){if(u.isInitialized()){u._publishEvent(new n(R));}else{}}
function E(W,V,X){var S=[],R,U,T=[];if(!(this instanceof E)){return null;}
if(typeof W!=="object"||!W||!W.nodeType){this.fullXpath="";this.xpath="";this.fullXpathList=[];this.xpathList=[];return;}
if(W.nodeType===3){W=W.parentElement;}
T=t(W,false,V,X);R=T[0];if(T.length&&(R.length===1||(R.length===2&&R[1]==="h"))){S=t(W,true,V);}else{S=Q.clone(T);}
this.xpath=H(T);this.xpathList=T;this.fullXpath=H(S);this.fullXpathList=S;U=S[S.length-1];this.isShadowHost=U?U[U.length-1]==="h":false;this.applyPrefix=function(aa){var Y,Z;if(!(aa instanceof E)||!aa.fullXpathList.length){return;}
Z=aa.fullXpathList[aa.fullXpathList.length-1];Y=this.fullXpathList.shift();if(Q.isEqual(Y[0],Z[0])){this.fullXpathList=aa.fullXpathList.concat(this.fullXpathList);}else{this.fullXpathList.unshift(Y);return;}
this.fullXpath=H(this.fullXpathList);Y=this.xpathList.shift();if(Y.length===1){this.xpathList.unshift(Y);return;}
this.xpathList=aa.xpathList.concat(this.xpathList);this.xpath=H(this.xpathList);};this.compare=function(Y){if(!(Y instanceof E)){return 0;}
return this.fullXpathList.length-Y.fullXpathList.length;};this.isSame=function(Y){var Z=false;if(!(Y instanceof E)){return Z;}
if(this.compare(Y)===0){Z=this.fullXpath===Y.fullXpath;}
return Z;};this.containedIn=function(aa,Z){var ac,ab,Y,ad;if(!(aa instanceof E)){return false;}
if(aa.fullXpathList.length>this.fullXpathList.length){return false;}
for(ac=0,Y=aa.fullXpathList.length;ac<Y;ac+=1){if(!Q.isEqual(aa.fullXpathList[ac],this.fullXpathList[ac])){return false;}}
if(!Z){for(ab=ac,Y=this.fullXpathList.length;ab<Y;ab+=1){ad=this.fullXpathList[ab];if(ad[ad.length-1]==="h"){return false;}}}
return true;};}
E.prototype=(function(){return{};})();return{init:function(){if(!K){d();}else{}},destroy:function(){L();},WebEvent:n,ElementData:g,Xpath:E,processDOMEvent:I,getNormalizedOrientation:M,getXPathFromNode:function(S,U,R,V,T){return x(U,R,V,T);},getNodeFromID:e,queryDom:s};});TLT.addService("browser",function(f){var o=f.utils,j=f.getService("config"),h=f.getService("browserBase"),i=null,e=null,m=j?j.getServiceConfig("browser"):{},d=o.getValue(m,"useCapture",true),c=o.getValue(m,"usePassive",true),n=false,g={NO_QUERY_SELECTOR:"NOQUERYSELECTOR"},q=function(r){return function(t){var s=new h.WebEvent(t);if(t.type==="resize"||t.type==="hashchange"){setTimeout(function(){r(s);},5);}else{r(s);}};},b={list2Array:function(t){var s=t.length,r=[],u;if(typeof t.length==="undefined"){return[t];}
for(u=0;u<s;u+=1){r[u]=t[u];}
return r;},find:function(t,s,r){r=r||"css";return this.list2Array(this[r](t,s));},css:function(s,r){r=r||document;return r.querySelectorAll(s);}},p=(function(){var r=new o.WeakMap();return{add:function(s){var t=r.get(s)||[q(s),0];t[1]+=1;r.set(s,t);return t[0];},find:function(s){var t=r.get(s);return t?t[0]:null;},remove:function(s){var t=r.get(s);if(t){t[1]-=1;if(t[1]<=0){r.remove(s);}}}};})();function l(){if(!document.querySelectorAll){f.fail("querySelectorAll does not exist!",g.NO_QUERY_SELECTOR);}}
function a(s){var r={capture:d,passive:c};if(o.isIE){return d;}
return o.mixin(r,s);}
function k(){b.xpath=h.queryDom.xpath;l();if(typeof document.addEventListener==="function"){i=function(u,r,t,s){s=a(s);u.addEventListener(r,t,s);};e=function(u,r,t,s){s=a(s);u.removeEventListener(r,t,s);};}else{if(typeof document.attachEvent!=="undefined"){i=function(t,r,s){t.attachEvent("on"+r,s);};e=function(t,r,s){t.detachEvent("on"+r,s);};}else{throw new Error("Unsupported browser");}}
n=true;}
return{init:function(){if(!n){k();}else{}},destroy:function(){n=false;},getServiceName:function(){return "W3C";},query:function(u,s,r){try{return b.find(u,s,r)[0]||null;}catch(t){return[];}},queryAll:function(u,s,r){try{return b.find(u,s,r);}catch(t){return[];}},subscribe:function(r,v,t,s){var u=p.add(t);i(v,r,u,s);},unsubscribe:function(r,w,t,s){var u=p.find(t);if(u){try{e(w,r,u,s);}catch(v){}
p.remove(t);}}};});TLT.addService("ajax",function(e){var k=e.utils,i,m=false,b=false,j=false;function g(p){var o="",n=[];for(o in p){if(p.hasOwnProperty(o)){n.push([o,p[o]]);}}
return n;}
function h(p){var o="",n="?";for(o in p){if(p.hasOwnProperty(o)){n+=encodeURIComponent(o)+"="+encodeURIComponent(p[o])+"&";}}
return n.slice(0,-1);}
function l(n){var p,q=false,o=h(n.headers);if(typeof n.data==="string"){p=n.data;}else{p=n.data?new Uint8Array(n.data):"";}
q=navigator.sendBeacon(n.url+o,p);return q;}
function f(o){var r=o.headers||{},q=o.id||0,p={method:o.type,headers:r,body:o.data,mode:o.isCrossOrigin?"cors":"same-origin",credentials:o.isCrossOrigin?"omit":"same-origin",keepalive:!o.isCrossOrigin&&o.isUnloading,cache:"no-store"},n=o.oncomplete||function(){};r["X-Requested-With"]="fetch";window.fetch(o.url,p).then(function(t){var s={success:t.ok,statusCode:t.status,statusText:t.statusText,id:q};if(s.success){t.text().then(function(u){try{s.data=JSON.parse(u);}catch(v){s.data=u;}
n(s);})
["catch"](function(u){s.statusCode=1;s.statusText=u.message;n(s);});}else{n(s);}})
["catch"](function(t){var s={success:false,statusCode:2,statusText:t.message,id:q};n(s);});}
function a(o){if(typeof o!=="function"){return;}
return function n(q){var s,p,r=false;if(!q){return;}
s=q.target;if(!s){return o(q);}
p=s.status;if(p>=200&&p<300){r=true;}
o({headers:k.extractResponseHeaders(s.getAllResponseHeaders()),responseText:s.responseText,statusCode:p,statusText:s.statusText,id:s.id,success:r});};}
function d(v){var u=i(),o=[["X-Requested-With","XMLHttpRequest"]],t=0,p=typeof v.async!=="boolean"?true:v.async,r="",s=null,q,n;if(v.headers){o=o.concat(g(v.headers));}
if(v.contentType){o.push(["Content-Type",v.contentType]);}
u.open(v.type.toUpperCase(),v.url,p);for(q=0,n=o.length;q<n;q+=1){r=o[q];if(r[0]&&r[1]){u.setRequestHeader(r[0],r[1]);}}
if(v.error){v.error=a(v.error);u.addEventListener("error",v.error);}
u.onreadystatechange=s=function(){if(u.readyState===4){u.onreadystatechange=s=function(){};if(v.timeout){window.clearTimeout(t);}
v.oncomplete({id:v.id,headers:k.extractResponseHeaders(u.getAllResponseHeaders()),responseText:u.responseText||null,statusCode:u.status,statusText:u.statusText,success:u.status>=200&&u.status<300});u=null;}};u.send(v.data||null);s();if(v.timeout){t=window.setTimeout(function(){if(!u){return;}
u.onreadystatechange=function(){};if(u.readyState!==4){u.abort();if(typeof v.error==="function"){v.error({id:v.id,statusCode:u.status,statusText:"timeout",success:false});}}
v.oncomplete({id:v.id,headers:k.extractResponseHeaders(u.getAllResponseHeaders()),responseText:u.responseText||null,statusCode:u.status,statusText:"timeout",success:false});u=null;},v.timeout);}}
function c(){var n=e.getServiceConfig("queue");if(typeof window.XMLHttpRequest!=="undefined"){i=function(){return new XMLHttpRequest();};}else{i=function(){return new ActiveXObject("Microsoft.XMLHTTP");};}
if(n){m=k.getValue(n,"useBeacon",true)&&typeof navigator.sendBeacon==="function";b=k.getValue(n,"useFetch",true)&&typeof window.fetch==="function";}
j=true;}
return{init:function(){if(!j){c();}},destroy:function(){j=false;},sendRequest:function(n){var p=true,o;n.type=n.type||"POST";if((n.isUnloading||!n.async)&&m){p=false;o=l(n);if(!o){p=true;}}
if(p){if(n.async&&b&&!n.timeout){f(n);}else{d(n);}}}};});TLT.addService("domCapture",function(E){var j=E.getService("config"),k=E.getService("browserBase"),d=E.getService("browser"),A,i,g={maxMutations:100,maxLength:1000000,captureShadowDOM:false,captureFrames:false,removeScripts:true,removeComments:true,captureStyle:true},ae={childList:true,attributes:true,attributeOldValue:true,characterData:true,subtree:true},a=typeof window.MutationObserver!=="undefined",C,M=ae,T=[],O=[],t,B=[],af=[],z=[],D=0,K=100,c=false,u=false,U=false,w=function(){},y=function(){},G=function(){},P=E._publishEvent,q=false,ak=E.utils;function f(am,ar){var aq,ao,au,aw,an,al,av,at,ap;if(!am||!ar||!ar.querySelectorAll){return;}
av=am.querySelectorAll("style");at=ar.querySelectorAll("style");for(aq=0,ap=av.length;aq<ap;aq+=1){al=av[aq];if(al.sheet){au=al.sheet.cssRules;for(ao=0,aw=au.length,an=[];ao<aw;ao+=1){an.push(au[ao].cssText);}
if(an.length){at[aq].innerHTML=an.join("\n");}}}}
function L(){af=[];z=[];D=0;c=false;}
function aa(ao){var an,am,al;if(!ao||!ao.length){return;}
ao=ao.sort(function(aq,ap){return aq.compare(ap);});for(an=0;an<ao.length;an+=1){al=ao[an];for(am=an+1;am<ao.length;am+=0){if(ao[am].containedIn(al)){ao.splice(am,1);}else{am+=1;}}}}
function v(an){var am,al;if(an){for(am=0,al=an.length;am<al;am+=1){delete an[am].oldValue;}}
return an;}
function W(ap,an){var am,al,ao=-1;if(!ap||!an){return ao;}
for(am=0,al=ap.length;am<al;am+=1){if(ap[am].name===an){ao=am;break;}}
return ao;}
function F(ao,aq){var an,am,al,ap;for(an=0,am=ao.length,ap=false;an<am;an+=1){al=ao[an];if(al.name===aq.name){if(al.oldValue===aq.value){ao.splice(an,1);}else{al.value=aq.value;}
ap=true;break;}}
if(!ap){ao.push(aq);}
return ao;}
function S(ar,al){var aq,ao,an,at,av,au,ap,am=0;ar.removedNodes=al.removedNodes.length;ar.addedNodes=ak.convertToArray(al.addedNodes);for(aq=0,at=af.length;aq<at;aq+=1){au=af[aq];if(ar.isSame(au)){if(ar.removedNodes){for(ao=0;ao<al.removedNodes.length;ao+=1){an=au.addedNodes.indexOf(al.removedNodes[ao]);if(an!==-1){au.addedNodes.splice(an,1);ar.removedNodes-=1;}}}
au.removedNodes+=ar.removedNodes;au.addedNodes.concat(ar.addedNodes);if(!au.removedNodes&&!au.addedNodes.length){ap=false;for(ao=0;ao<af.length;ao+=1){if(au!==af[ao]&&af[ao].containedIn(au)){ap=true;break;}}
if(!ap){af.splice(aq,1);am=-1;}}
av=true;break;}}
if(!av){af.push(ar);am=1;}
return am;}
function ab(am,aq){var ao,an,al,ar=false,ap,at;for(ao=0,al=af.length;!ar&&ao<al;ao+=1){at=af[ao];if(am.containedIn(at)){ap=at.addedNodes;for(an=0;an<ap.length;an+=1){if(ap[an].contains&&ap[an].contains(aq)){ar=true;break;}}}}
return ar;}
function J(ap,al){var an,aq,at,ao,au,ar=null,am=0;at=al.attributeName;if(at==="checked"||at==="selected"){ar=k.ElementData.prototype.examineID(al.target);if(A.isPrivacyMatched(ar)){return am;}
ar=null;}
if(at==="value"){ar=k.ElementData.prototype.examineID(al.target);ar.currState=ak.getTargetState(al.target)||{};if(ar.currState.value){A.applyPrivacyToTarget(ar);}else{ar=null;}}
ap.attributes=[{name:at,oldValue:al.oldValue,value:ar?ar.currState.value:al.target.getAttribute(at)}];ao=ap.attributes[0];if(ao.oldValue===ao.value){return am;}
for(an=0,aq=z.length,au=false;an<aq;an+=1){ar=z[an];if(ap.isSame(ar)){ar.attributes=F(ar.attributes,ao);if(!ar.attributes.length){z.splice(an,1);am=-1;}else{if(ab(ap,al.target)){z.splice(an,1);am=-1;}}
au=true;break;}}
if(!au&&!ab(ap,al.target)){z.push(ap);am=1;}
return am;}
function p(ao){var aq,al,ap,am,an;if(!ao||!ao.length){return;}
if(c){D+=ao.length;return;}
for(aq=0,al=ao.length;aq<al&&D<K;aq+=1){am=ao[aq];an=new k.Xpath(am.target);if(an){ap=an.fullXpathList;if(ap.length&&ap[0][0]==="html"){switch(am.type){case "characterData":case "childList":D+=S(an,am);break;case "attributes":D+=J(an,am);break;default:ak.clog("Unknown mutation type: "+am.type);break;}}}}
if(D>=K){c=true;D+=al-aq;}}
function x(){var al;al=new window.MutationObserver(function(am){if(am){p(am);ak.clog("Processed ["+am.length+"] mutation records.");E.invokeMutationCallbacks(am);}});return al;}
function n(al){var am=t.call(this,al);if(C&&am){C.observe(am,M);}
return am;}
function N(){if(!C){return null;}
C.observe(window.document,M);if(!t&&ak.getValue(i,"options.captureShadowDOM",false)){t=Element.prototype.attachShadow;Element.prototype.attachShadow=n;}
q=true;return C;}
function l(an){var ap,al,ao,at,ar,am,aq=j.getCoreConfig();j.subscribe("configupdated",G);A=E.getService("message");i=an;i.options=ak.mixin({},g,i.options);a=a&&ak.getValue(i,"diffEnabled",true);K=ak.getValue(i.options,"maxMutations",100);if(a){M=ak.getValue(i,"diffObserverConfig",ae);C=x();T.push(window);}
am=i.options.captureShadowDOM&&Element.prototype.attachShadow;if(am&&window.ShadyDOM&&window.ShadyDOM.inUse){i.options.captureShadowDOM=false;am=false;}
if(am){for(ao in aq.modules){if(aq.modules.hasOwnProperty(ao)){ar=aq.modules[ao].events||[];for(ap=0,al=ar.length;ap<al;ap+=1){if(ar[ap].attachToShadows){at=ar[ap].name;if(ak.indexOf(B,at)===-1){B.push(at);}}}}}}
N();U=true;}
function Y(){j.unsubscribe("configupdated",G);if(C){C.disconnect();C=null;}
if(t&&Element.prototype.attachShadow===n){Element.prototype.attachShadow=t;t=null;}
U=false;}
function r(){var al;al="tlt-"+ak.getSerialNumber();return al;}
function Z(an,am,al){var ap,ar,aq,ao,au,at=[];if(!an||!am){return at;}
if(al&&al.length===2){ar=al[0];aq=al[1];}
ao=an.querySelectorAll(am);if(ao&&ao.length){for(ap=ao.length-1;ap>=0;ap-=1){au=ao[ap];if(!ar){at.push(au);}else{if(au[ar]===aq){at.push(au);}}}}
return at;}
function h(ap,an,ao){var am,al,aq;aq=Z(ap,an,ao);for(am=aq.length-1;am>=0;am-=1){al=aq[am];al.parentNode.removeChild(al);}
return ap;}
function aj(ao,am){var an,al,aq=Z(ao,"img"),ap=new RegExp("^data:image/(.*?);base64");for(an=0;an<aq.length;an++){al=aq[an];if(ap.test(al.src)&&al.src.length>am){al.src="";al.setAttribute("removedByUIC",true);}}
return ao;}
function R(an,al){var am,ao;for(am=0;an.hasChildNodes()&&am<an.childNodes.length;am+=1){ao=an.childNodes[am];if(ao.nodeType===al){an.removeChild(ao);am-=1;}else{if(ao.hasChildNodes()){R(ao,al);}}}
return an;}
function ad(an){var ao,am,al=null;if(!an){return al;}
switch(an.nodeType){case 1:ao=an.ownerDocument;if(ao&&ao.documentElement===an){am=ao.doctype;}
break;case 9:am=an.doctype;break;default:break;}
if(am){al="<!DOCTYPE "+
am.name+
(am.publicId?' PUBLIC "'+am.publicId+'"':"")+
(!am.publicId&&am.systemId?" SYSTEM":"")+
(am.systemId?' "'+am.systemId+'"':"")+
">";}
return al;}
function ac(ar,at){var aq,an,ap,ao,am,al;if(!at){return;}
ao=ar.querySelectorAll("input");am=at.querySelectorAll("input");if(am){for(aq=0,al=am.length;aq<al;aq+=1){an=ao[aq];ap=am[aq];switch(ap.type){case "checkbox":case "radio":if(an.checked){ap.setAttribute("checked","checked");}else{ap.removeAttribute("checked");}
break;default:ap.setAttribute("value",an.value);if(!ap.getAttribute("type")){ap.setAttribute("type","text");}
break;}}}}
function m(ar,at){var ao,al,aq,am,an,ap;if(!ar||!at){return;}
am=ar.querySelectorAll("textarea");ap=at.querySelectorAll("textarea");if(am&&ap){for(ao=0,al=am.length;ao<al;ao+=1){aq=am[ao];an=ap[ao];an.setAttribute("value",aq.value);an.value=an.textContent=aq.value;}}}
function V(al,aq){var am,at,ar,au,ao,an,ap;if(!al||!aq){return;}
at=al.querySelectorAll("select");au=aq.querySelectorAll("select");if(at){for(ao=0,ap=at.length;ao<ap;ao+=1){am=at[ao];ar=au[ao];for(an=0;an<am.options.length;an+=1){if(an===am.selectedIndex||am.options[an].selected){ar.options[an].setAttribute("selected","selected");}else{ar.options[an].removeAttribute("selected");}}}}}
function H(am,an){var al,ao=null;if(am){al=am.nodeType||-1;switch(al){case 11:ao=am.innerHTML;break;case 9:ao=am.documentElement?am.documentElement.outerHTML:"";break;case 1:ao=an?am.innerHTML:am.outerHTML;break;default:ao=null;break;}}
return ao;}
function ai(an){var al,am=false;if(an&&typeof an==="object"){al=an.nodeType||-1;switch(al){case 9:case 1:am=true;break;default:am=false;break;}}
return am;}
function b(at,aC,am){var aw,av,ax,aD,au=["iframe","frame"],aB,an,aq,aA,ao,az,ap={frames:[]},aE,ar,al;for(av=0;av<au.length;av+=1){aD=au[av];aE=at.querySelectorAll(aD);ar=aC.querySelectorAll(aD);if(aE){for(aw=0,ax=aE.length;aw<ax;aw+=1){try{aB=aE[aw];an=ak.getIFrameWindow(aB);if(an&&an.document&&an.location.href!=="about:blank"){aq=an.document;aA=y(aq,aq,"",am);ao=r();ar[aw].setAttribute("tltid",ao);aA.tltid=ao;ar[aw].removeAttribute("srcdoc");al=ak.getOriginAndPath(aq.location);aA.host=al.origin;aA.url=E.normalizeUrl("",al.path,12);aA.charset=aq.characterSet||aq.charset;az=ar[aw].getAttribute("src");if(!az){az=an.location.href;ar[aw].setAttribute("src",az);}
if(!aA.root){aA.root="<html></html>";}
ap.frames=ap.frames.concat(aA.frames);delete aA.frames;ap.frames.push(aA);}}catch(ay){}}}}
return ap;}
function ag(am){var an,al,ao;am.TLTListeners=am.TLTListeners||{};for(an=0,al=B.length;an<al;an+=1){ao=B[an];if(!am.TLTListeners[ao]){d.subscribe(ao,am,P);am.TLTListeners[ao]=true;}}}
function e(am,aw,ax,ap){var aq,au,an,ar,al,ao,at={shadows:[]};if(!am||(!ap&&!am.children)){return at;}
if(ap){al=[am];}else{al=am.children;}
for(aq=0,au=al.length;aq<au;aq+=1){ar=al[aq];if(ar.shadowRoot){ao=new k.Xpath(ar);an=y(ar.ownerDocument,ar.shadowRoot,"",ax);at.shadows.push({root:an.root,originalSize:an.originalSize,xpath:ao.xpath});at.shadows=at.shadows.concat(an.shadows);ag(ar.shadowRoot);if(a){try{C.observe(ar.shadowRoot,M);ar.shadowRoot.TLTListeners.mutation=true;if(ak.indexOf(O,ar)===-1){O.push(ar);}}catch(av){ak.clog("Failed to observe shadow root.",av,ar);}}}
an=e(ar,null,ax);at.shadows=at.shadows.concat(an.shadows);}
return at;}
function ah(ap){var ao,an,aq,av,ar,al,at,am,au=0;if(!ap){return au;}
if(ap.root){au+=ap.root.length;if(ap.frames){at=ap.frames;for(ao=0,aq=at.length;ao<aq;ao+=1){if(at[ao].root){au+=at[ao].root.length;}}}}else{if(ap.diffs){for(ao=0,aq=ap.diffs.length;ao<aq;ao+=1){al=ap.diffs[ao];au+=al.xpath.length;if(al.root){au+=al.root.length;}else{if(al.attributes){for(an=0,av=al.attributes.length;an<av;an+=1){ar=al.attributes[an];au+=ar.name.length;if(ar.value){au+=ar.value.length;}}}}}}}
if(ap.shadows){am=ap.shadows;for(ao=0,aq=am.length;ao<aq;ao+=1){if(am[ao].root){au+=am[ao].root.length;}}}
return au;}
function X(){var ao,an,al,am;for(ao=0,al=af.length;ao<al&&z.length;ao+=1){am=af[ao];for(an=0;an<z.length;an+=1){if(z[an].containedIn(am)){z.splice(an,1);an-=1;}}}}
function o(ao){var an,al,am,ap,aq=[];if(!ao||!ao.children){return aq;}
ap=ao.children;for(an=0,al=ap.length;an<al;an+=1){am=ap[an];if(am.shadowRoot){if(!am.shadowRoot.TLTListeners){aq.push([am,am.shadowRoot]);}
aq=aq.concat(o(am.shadowRoot));}
aq=aq.concat(o(am));}
return aq;}
function I(ar,an){var ao,al,ap,aq,am;if(!ar||!an){return;}
if(!an.captureShadowDOM){return;}
am=o(ar);for(ao=0,al=am.length,ap=[];ao<al;ao+=1){aq=e(am[ao][0],null,an,true);ap=ap.concat(aq.shadows);}
return ap;}
function s(aq,an){var ar,am,ap,ao,al;ar=y(aq,aq,null,an);if(!ar){ar={};}
ar.charset=aq.characterSet||aq.charset;am=ak.getOriginAndPath(aq.location);ar.host=am.origin;ar.url=E.normalizeUrl("",am.path,12);return ar;}
function Q(aA){var aq,at,ay={fullDOM:false,diffs:[],attributeDiffs:{}},ax,az,aw,ar,an,au,am,ap,av=new RegExp("^data:image/(.*?);base64");aa(af);X();ar=aA.captureShadowDOM;aA.captureShadowDOM=false;for(aq=0,at=af.length;aq<at;aq+=1){am=af[aq];au=k.getNodeFromID(am.xpath,-2);if(!au){continue;}
if(am.isShadowHost){au=au.shadowRoot;if(!au.TLTListeners){continue;}}
if(au===window.document.body||au===window.document.documentElement){aA.captureShadowDOM=ar;return s(window.document,aA);}
ax=y(window.document,au,am,aA);delete ax.originalSize;if(ax.shadows&&ax.shadows.length===0){delete ax.shadows;}
if(ax.frames&&ax.frames.length===0){delete ax.frames;}
ax.xpath=am.xpath;ay.diffs.push(ax);}
function ao(aC,aB){if(!aC||!aC.name){return;}
ay.attributeDiffs[ax.xpath][aC.name]={value:aC.value};}
function al(aE){var aC,aB,aD;for(aC=0,aD=aE.length;aC<aD;aC+=1){aB=aE[aC];if(aB.name==="src"&&av.test(aB.value)&&aB.value.length>aA.discardBase64){aB.value="";aE.push({name:"removedByUIC",value:true});break;}}
return aE;}
for(aq=0,at=z.length;aq<at;aq+=1){am=z[aq];az=W(am.attributes,"id");if(az>-1){au=k.getNodeFromID(am.xpath,-2);if(!au){au=k.getNodeFromID(am.fullXpath,-2);}
aw=new k.Xpath(au,false,am.attributes[az].oldValue);am.xpath=aw.xpath;}
ap=v(am.attributes);if(aA.hasOwnProperty("discardBase64")){au=k.getNodeFromID(am.xpath,-2);if(!au){au=k.getNodeFromID(am.fullXpath,-2);}
if(au&&au.tagName.toLowerCase()==="img"&&ap){ap=al(ap);}}
ax={xpath:am.xpath,attributes:ap};ay.diffs.push(ax);ay.attributeDiffs[ax.xpath]={};ak.forEach(ax.attributes,ao);}
aA.captureShadowDOM=ar;an=I(window.document,aA);if(an&&an.length){ay.shadows=an;}
return ay;}
w=function(al){var am=null;if(ai(al)){am=al.cloneNode(true);if(!am&&al.documentElement){am=al.documentElement.cloneNode(true);}}
return am;};y=function(av,at,aq,ax){var ao=true,am,aw,an,au,ap={},ar,al;if(!av||!at){return ap;}
aw=H(at);if(aw){ap.originalSize=aw.length;}
am=w(at,av);if(!am&&at.host){ao=false;al=document.createElement("div");al.id="srph-"+Date.now();al.innerHTML=H(at);am=al;}else{if(!am){return ap;}}
if(am){if(!!ax.removeScripts){h(am,"script");h(am,"noscript");}
if(!ax.keepImports){h(am,"link",["rel","import"]);}
if(!!ax.removeComments){R(am,8);}
if(!ax.captureStyle){h(am,"style");}else{if(ax.useACS){f(at,am);}}
if(ax.hasOwnProperty("discardBase64")){aj(am,ax.discardBase64);}
V(at,am);ac(at,am);m(at,am);am=A.applyPrivacyToNode(am,aq,av);if(!!ax.captureFrames){an=b(at,am,ax);}}
if(!!ax.captureShadowDOM){au=e(at,ao?am:null,ax);}
if(an){ap=ak.mixin(ap,an);}
if(au){ap=ak.mixin(ap,au);}
ar=(ad(at)||"")+H(am||at,!ao);ap.root=A.applyPrivacyPatterns(ar);return ap;};G=function(){j=E.getService("config");l(j.getServiceConfig("domCapture")||{});};return{init:function(){j=E.getService("config");if(!U){l(j.getServiceConfig("domCapture")||{});}else{}},destroy:function(){Y();},observeWindow:function(al){if(!al){return;}
if(!ak.getValue(i,"options.captureFrames",false)&&!(al===window)){return;}
if(ak.indexOf(T,al)===-1){T.push(al);if(C&&q){C.observe(al.document,M);}}},captureDOM:function(am,an){var ao,al,ar=null,ap,at=0;if(!U||(ak.isIE&&document.documentMode<10)){return ar;}
an=ak.mixin({},i.options,an);am=am||window.document;if(!u||!a||c||an.forceFullDOM){if(C){C.disconnect();}
ar=s(am,an);ar.fullDOM=true;ar.forced=!!(c||an.forceFullDOM);u=true;if(C){for(ao=0,al=T.length;ao<al;ao+=1){ap=T[ao];try{C.observe(ap.document,M);}catch(aq){T.splice(ao,1);al=T.length;ao-=1;}}}}else{ar=Q(an);ar.fullDOM=ar.diffs?false:true;}
if(a){ar.mutationCount=D;}
L();if(an.maxLength){at=ah(ar);if(at>an.maxLength){ar={errorCode:101,error:"Captured length ("+
at+
") exceeded limit ("+
an.maxLength+
")."};}}
return ar;}};});TLT.addService("encoder",function(a){var f={},g=null,b=null,d=false;function e(j){var i=null;if(!j){return i;}
i=f[j];if(i&&typeof i.encode==="string"){i.encode=a.utils.access(i.encode);}
return i;}
function h(i){f=i;g.subscribe("configupdated",b);d=true;}
function c(){g.unsubscribe("configupdated",b);d=false;}
b=function(){g=a.getService("config");h(g.getServiceConfig("encoder")||{});};return{init:function(){g=a.getService("config");if(!d){h(g.getServiceConfig("encoder")||{});}else{}},destroy:function(){c();},encode:function(m,l){var k,i,j={data:null,encoding:null,error:null};if((typeof m!=="string"&&!m)||!l){j.error="Invalid "+(!m?"data":"type")+" parameter.";return j;}
k=e(l);if(!k){j.error="Specified encoder ("+l+") not found.";return j;}
if(typeof k.encode!=="function"){j.error="Configured encoder ("+l+") 'encode' method is not a function.";return j;}
try{i=k.encode(m);}catch(n){j.error="Exception "+(n.name?n.name+" - ":"")+(n.message||n);return j;}
if(!i||a.utils.getValue(i,"buffer",null)===null){j.error="Encoder ("+l+") returned an invalid result.";return j;}
j.data=i.buffer;j.encoding=k.defaultEncoding;return j;}};});TLT.addService("message",function(y){var W=y.utils,Q=y.getTabId(),c=[],M=0,n=0,h=window.performance&&performance.timeOrigin?Math.round(performance.timeOrigin):y.getStartTime(),G=new Date().getTimezoneOffset(),m=y.getService("browserBase"),b=y.getService("browser"),l=y.getService("config"),i=l.getCoreConfig(),D=l.getServiceConfig("message")||{},r=y.normalizeUrl("",window.location.href),S=window.location.hostname,f,x,X=D.hasOwnProperty("privacy")?D.privacy:[],d,J={},T={lower:"x",upper:"X",numeric:"9",symbol:"@"},j=parseFloat((window.devicePixelRatio||1).toFixed(2)),k=window.screen||{},a=k.width||0,B=k.height||0,U=m.getNormalizedOrientation(),o=!W.isiOS?a:Math.abs(U)===90?B:a,H=!W.isiOS?B:Math.abs(U)===90?a:B,P=window.screen?window.screen.height-window.screen.availHeight:0,O=window.innerWidth||document.documentElement.clientWidth,s=window.innerHeight||document.documentElement.clientHeight,L=false,A={},q=false;function V(){var Y=window.performance&&performance.now?Math.round(performance.now()):new Date().getTime()-h;return Y;}
function g(Z){var Y="";delete Z.timestamp;this.type=Z.type;this.offset=V();if(Z.type===2&&Z.screenview.type==="LOAD"){c.push(V());this.screenviewOffset=0;}else{if(c.length){this.screenviewOffset=V()-c[c.length-1];if(Z.type===2&&Z.screenview.type==="UNLOAD"){c.pop();}}else{this.screenviewOffset=0;}}
if(!this.type){return;}
this.count=n+=1;this.fromWeb=true;for(Y in Z){if(Z.hasOwnProperty(Y)){this[Y]=Z[Y];}}}
J.PVC_MASK_EMPTY=function(Y){return "";};J.PVC_MASK_BASIC=function(Z){var Y="XXXXX";if(typeof Z!=="string"){return "";}
return Z.length?Y:"";};J.PVC_MASK_TYPE=function(ac){var Z,ab,Y,aa="";if(typeof ac!=="string"){return aa;}
Z=ac.split("");for(ab=0,Y=Z.length;ab<Y;ab+=1){if(W.isNumeric(Z[ab])){aa+=T.numeric;}else{if(W.isUpperCase(Z[ab])){aa+=T.upper;}else{if(W.isLowerCase(Z[ab])){aa+=T.lower;}else{aa+=T.symbol;}}}}
return aa;};J.PVC_MASK_EMPTY.maskType=1;J.PVC_MASK_BASIC.maskType=2;J.PVC_MASK_TYPE.maskType=3;J.PVC_MASK_CUSTOM={maskType:4};function e(Y,ab,Z){var aa=J.PVC_MASK_BASIC;if(typeof ab!=="string"){return ab;}
if(!Y){aa=J.PVC_MASK_BASIC;}else{if(Y.maskType===J.PVC_MASK_EMPTY.maskType){aa=J.PVC_MASK_EMPTY;}else{if(Y.maskType===J.PVC_MASK_BASIC.maskType){aa=J.PVC_MASK_BASIC;}else{if(Y.maskType===J.PVC_MASK_TYPE.maskType){aa=J.PVC_MASK_TYPE;}else{if(Y.maskType===J.PVC_MASK_CUSTOM.maskType){if(typeof Y.maskFunction==="string"){aa=W.access(Y.maskFunction);}else{aa=Y.maskFunction;}
if(typeof aa!=="function"){aa=J.PVC_MASK_BASIC;}}}}}}
return aa(ab,Z);}
function F(Y,Z){var aa;if(!Y||!Z){return;}
for(aa in Z){if(Z.hasOwnProperty(aa)){if(aa==="value"){Z[aa]=e(Y,Z[aa]);}else{delete Z[aa];}}}}
function R(Y,Z){return W.matchTarget(Y,Z)!==-1;}
function K(ad){var Z,Y,aa,ac,ab;if(!ad){return "";}
for(Z=0,Y=d.length;Z<Y;Z+=1){ab=d[Z];ab.cRegex.lastIndex=0;ad=ad.replace(ab.cRegex,ab.replacement);}
return ad;}
function I(af){var ac,Y,ab,Z,ae=false,ad,aa;if(!af||(!af.currState&&!af.prevState)||!af.id){return af;}
ad=af.prevState;aa=af.currState;for(ac=0,Y=X.length;ac<Y;ac+=1){Z=X[ac];ab=W.getValue(Z,"exclude",false);if(R(Z.targets,af)!==ab){if(ad&&ad.hasOwnProperty("value")){F(Z,ad);}
if(aa&&aa.hasOwnProperty("value")){F(Z,aa);}
ae=true;break;}}
if(!ae){if(ad&&ad.value){ad.value=K(ad.value);}
if(aa&&aa.value){aa.value=K(aa.value);}}
return af;}
function t(Y){if(!Y||!Y.target){return Y;}
I(Y.target);return Y;}
function p(ab,Z){var aa,Y,ad,ac;if(!Z||!ab){return;}
if(ab.value){ad=e(Z,ab.value,ab);ab.setAttribute("value",ad);ab.value=ad;}else{if(Z.maskType===J.PVC_MASK_CUSTOM.maskType){e(Z,"",ab);}}
if(ab.checked){ab.removeAttribute("checked");}
if(W.getTagName(ab)==="select"){ab.selectedIndex=-1;for(aa=0,Y=ab.options.length;aa<Y;aa+=1){ac=ab.options[aa];ac.removeAttribute("selected");ac.selected=false;}}else{if(W.getTagName(ab)==="textarea"){ab.textContent=ab.value;}}}
function w(aj,ag,ak,ap,ad,af){var al,ai,ah,am,aa,ab,ae=[],an,Y,ac,ao,Z;if(!aj.length&&!ad.length&&!af){return[];}
Z=b.queryAll("input, select, textarea",ag);if(!Z||!Z.length){return[];}
for(al=0,am=ad.length;al<am;al+=1){ai=Z.indexOf(ad[al]);if(ai!==-1){Z.splice(ai,1);}}
if(aj.length){for(al=0,am=Z.length,ae=[];al<am;al+=1){if(Z[al].value){ab=m.ElementData.prototype.examineID(Z[al],true);if(ab.idType===-2){an=new m.Xpath(Z[al],true);an.applyPrefix(ak);ab.id=an.xpath;}
ae.push({id:ab.id,idType:ab.idType,element:Z[al]});}}}
for(al=0,am=aj.length;al<am;al+=1){ac=X[aj[al].ruleIndex];Y=W.getValue(ac,"exclude",false);ao=ac.targets[aj[al].targetIndex];if(typeof ao.id==="string"&&ao.idType===-2){for(ai=0;ai<ae.length;ai+=1){if(ae[ai].idType===ao.idType&&ae[ai].id===ao.id){if(!Y){aa=ae[ai].element;p(aa,ac);}else{ah=Z.indexOf(aa);Z.splice(ah,1);}}}}else{for(ai=0;ai<ae.length;ai+=1){ao.cRegex.lastIndex=0;if(ae[ai].idType===ao.idType&&ao.cRegex.test(ae[ai].id)){aa=ae[ai].element;if(!Y){p(aa,ac);}else{ah=Z.indexOf(aa);Z.splice(ah,1);}}}}}
if(af){for(al=0,am=Z.length;al<am;al+=1){p(Z[al],af);}}}
function u(ae,aj,ap){var ak,ag,af,aa,Y,ab=[],ad,al,ah,Z,am,ai=[],ao,an,ac;if(!ae||!ap){return null;}
for(ak=0,al=X.length;ak<al;ak+=1){ah=X[ak];Y=W.getValue(ah,"exclude",false);if(Y){ad=ah;}
an=ah.targets;for(ag=0,ac=an.length;ag<ac;ag+=1){ao=an[ag];if(typeof ao==="string"){Z=b.queryAll(ao,ae);if(!Y){for(af=0,am=Z.length;af<am;af+=1){aa=Z[af];p(aa,ah);}}else{ab=ab.concat(Z);}}else{if(typeof ao.id==="string"){switch(ao.idType){case-1:case-3:aa=m.getNodeFromID(ao.id,ao.idType,ae);if(!Y){p(aa,ah);}else{ab.push(aa);}
break;case-2:ai.push({ruleIndex:ak,targetIndex:ag,exclude:Y});break;default:break;}}else{ai.push({ruleIndex:ak,targetIndex:ag,exclude:Y});}}}}
w(ai,ae,aj,ap,ab,ad);return ae;}
function v(ac){var aa,Y,Z,ab=false;if(!ac){return ab;}
for(aa=0,Y=X.length;aa<Y;aa+=1){Z=X[aa];if(R(Z.targets,ac)){ab=true;break;}}
return ab;}
function z(){var ab,aa,Y,ae,af,ad,Z,ac;l=y.getService("config");D=l.getServiceConfig("message")||{};i=l.getCoreConfig();X=D.privacy||[];d=D.privacyPatterns||[];q=W.getValue(D,"shadowDOMCacheEnabled",true);for(ab=0,af=X.length;ab<af;ab+=1){ae=X[ab];Z=ae.targets;for(aa=0,ac=Z.length;aa<ac;aa+=1){ad=Z[aa];if(typeof ad==="object"){if(typeof ad.idType==="string"){ad.idType=+ad.idType;}
if(typeof ad.id==="object"){ad.cRegex=new RegExp(ad.id.regex,ad.id.flags);}}}}
for(Y=d.length,ab=Y-1;ab>=0;ab-=1){ae=d[ab];if(typeof ae.pattern==="object"){ae.cRegex=new RegExp(ae.pattern.regex,ae.pattern.flags);}else{d.splice(ab,1);}}}
function C(){if(l.subscribe){l.subscribe("configupdated",z);}
z();L=true;}
function N(){l.unsubscribe("configupdated",z);L=false;}
function E(ag){var ad=ag.dcid,aa=ag.shadows||[],ac=ag.fullDOM,ah=1,ab,ae,af,Z,Y;if(aa.length===0||!ac){return;}
for(af in A){if(A.hasOwnProperty(af)){A[af].age+=1;}}
for(ab=0,ae=aa.length;ab<ae;ab+=1){Z=aa[ab];Y=A[Z.xpath];if(Y&&Y.root===Z.root){Y.hitCount+=1;Y.age-=1;Z.cacheDCID=Y.dcid;delete Z.root;}else{A[Z.xpath]={root:Z.root,dcid:ad,hitCount:0,age:0};}}
for(af in A){if(A.hasOwnProperty(af)){Y=A[af];if(Y.age>Y.hitCount+ah){delete A[af];}}}}
return{init:function(){if(!L){C();try{f=sessionStorage.getItem("tl.TR");x=sessionStorage.getItem("tl.PU");sessionStorage.removeItem("tl.TR");sessionStorage.removeItem("tl.PU");}catch(Y){f=null;}}else{}},destroy:function(){N();},applyPrivacyToNode:u,applyPrivacyToMessage:t,applyPrivacyToTarget:I,applyPrivacyPatterns:K,isPrivacyMatched:v,createMessage:function(Y){if(typeof Y.type==="undefined"){throw new TypeError("Invalid queueEvent given!");}
if(Y.type===12&&q){E(Y.domCapture);}
return t(new g(Y));},wrapMessages:function(Z){var Y={messageVersion:"13.0.0.0",serialNumber:(M+=1),sessions:[{id:y.getPageId(),tabId:Q,startTime:h,timezoneOffset:G,messages:Z,clientEnvironment:{webEnvironment:{libVersion:"6.2.0.2010",buildNote:i.buildNote||"",domain:S,page:r,referrer:document.referrer,mouseMovement:y.isMousemovementDetected(),screen:{devicePixelRatio:j,deviceWidth:o,deviceHeight:H,deviceToolbarHeight:P,width:O,height:s,orientation:U}}}}]},aa=Y.sessions[0].clientEnvironment.webEnvironment;aa.screen.orientationMode=W.getOrientationMode(aa.screen.orientation);if(f){aa.priorPage={page:x,terminationReason:f};}
return Y;},getCurrentOffset:V};});TLT.addService("serializer",function(b){var d=b.getService("config"),j={},c={},k={json:(function(){if(typeof window.JSON!=="undefined"){return{serialize:window.JSON.stringify,parse:window.JSON.parse};}
return{};})()},f=null,i=false;function e(q,o,m){var n,l,p;q=q||[];for(n=0,l=q.length;n<l;n+=1){p=q[n];if(typeof p==="string"){p=b.utils.access(p);}
if(typeof p==="function"){o[m]=p;break;}}}
function h(){var l;if(typeof j.json!=="function"||typeof c.json!=="function"){l=true;}else{if(typeof c.json('{"foo": "bar"}')==="undefined"){l=true;}else{l=c.json('{"foo": "bar"}').foo!=="bar";}
if(typeof c.json("[1, 2]")==="undefined"){l=true;}else{l=l||c.json("[1, 2]")[0]!==1;l=l||c.json("[1,2]")[1]!==2;}
l=l||j.json({foo:"bar"})!=='{"foo":"bar"}';l=l||j.json([1,2])!=="[1,2]";}
return l;}
function a(l){var m;for(m in l){if(l.hasOwnProperty(m)){e(l[m].stringifiers,j,m);e(l[m].parsers,c,m);}}
j.json=j.json||k.json.serialize;c.json=c.json||k.json.parse;if(typeof j.json!=="function"||typeof c.json!=="function"){b.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.");}
if(h()){b.fail("JSON stringification and parsing are not working as expected");}
if(d){d.subscribe("configupdated",f);}
i=true;}
function g(){j={};c={};if(d){d.unsubscribe("configupdated",f);}
i=false;}
f=function(){d=b.getService("config");a(d.getServiceConfig("serializer"));};return{init:function(){var l;if(!i){l=d?d.getServiceConfig("serializer"):{};a(l);}else{}},destroy:function(){g();},parse:function(m,l){l=l||"json";return c[l](m);},serialize:function(n,m){var l;m=m||"json";l=j[m](n);return l;}};});TLT.addModule("TLCookie",function(d){var l={},i=[],k=0,f=true,p=false,h="WCXSID",o="TLTSID",b="CoreID6",s,q,c=null,r,t=d.utils;function a(){var y="123456789",x=t.getRandomString(1,y)+t.getRandomString(31,y+"0");return x;}
function m(){var z=a(),y=!!l.secureTLTSID,x=l.samesite;t.setCookie(o,z,undefined,undefined,undefined,y,x);return t.getCookieValue(o);}
function n(){if(c||!window.cmRetrieveUserID){return;}
try{window.cmRetrieveUserID(function(y){c=y;});}catch(x){c=null;}}
function g(B){var x,y,A,z;if(!localStorage||!B){return;}
A=localStorage.getItem(B);if(A){y=A.split("|");x=parseInt(y[0],10);if(Date.now()>x){localStorage.removeItem(B);}else{z=y[1];}}
return z;}
function w(z,y){var x;if(!localStorage||!z){return;}
y=y||a();x=Date.now()+k;localStorage.setItem(z,x+"|"+y);return g(z);}
function j(){return i;}
function e(x){i=[];f=t.getValue(x,"sessionIDUsesCookie",true);p=t.getValue(x,"sessionIDUsesStorage",false);if(x.tlAppKey){r=x.tlAppKey;i.push({name:"X-Tealeaf-SaaS-AppKey",value:r});}
if(x.visitorCookieName){b=x.visitorCookieName;}
if(x.wcxCookieName){h=x.wcxCookieName;}
s=t.getCookieValue(h);if(s){i.push({name:"X-WCXSID",value:s});}
if(x.sessionizationCookieName){o=x.sessionizationCookieName;}
if(p){k=t.getValue(x,"sessionIDStorageTTL",600000);try{q=g(o);}catch(z){p=false;}}
if(!q&&f){q=t.getCookieValue(o);}
if(!q){if(s){o=h;q=s;}else{if(p){try{q=w(o);}catch(y){p=false;}}
if(!q&&f){q=m();}}}
d.setSessionCookieInfo(o,q);if(!q){q="Check7UIC7Cookie7Configuration77";}
i.push({name:"X-Tealeaf-SaaS-TLTSID",value:q});if(i.length){TLT.registerBridgeCallbacks([{enabled:true,cbType:"addRequestHeaders",cbFunction:j}]);}}
function u(C){var z,y,x=false,B,A=l.appCookieWhitelist;if(!A||!A.length){return x;}
for(z=0,y=A.length;z<y&&!x;z+=1){B=A[z];if(B.regex){if(!B.cRegex){B.cRegex=new RegExp(B.regex,B.flags);}
B.cRegex.lastIndex=0;x=B.cRegex.test(C);}else{x=B===C;}}
return x;}
function v(){var B,A,C,D={},y,H=document.cookie,z=[],G="",x="";if(!H){return;}
z=H.split("; ");for(B=0,C=z.length;B<C;B+=1){y=z[B];A=y.indexOf("=");if(A>=0){try{G=decodeURIComponent(y.substr(0,A));}catch(F){G=y.substr(0,A);}}
x=y.substr(A+1);if(u(G)){try{D[G]=decodeURIComponent(x);}catch(E){D[G]=x;}}}
if(c&&!D[b]){D[b]=c;}
d.post({type:14,cookies:D});}
return{init:function(){l=d.getConfig()||{};e(l);n();},destroy:function(){if(p){w(o,q);}
window.setTimeout(function(){TLT.registerBridgeCallbacks([{enabled:false,cbType:"addRequestHeaders",cbFunction:j}]);});},onevent:function(x){switch(x.type){case "screenview_load":if(t.getValue(l,"appCookieWhitelist.length",0)){n();v();}
break;default:break;}}};});TLT.addModule("dataLayer",function(b){var c=false,m,l=b.utils,f,k,n,e;function a(){var o=null;if(!m.dataObject){return o;}
switch(typeof m.dataObject){case "object":o=m.dataObject;break;case "function":try{o=m.dataObject();}catch(p){}
break;default:break;}
return o;}
function d(s,t){var p,o,r,q=-1;if(!s||!t){return q;}
for(p=0,o=t.length;p<o&&q===-1;p+=1){r=t[p];switch(typeof r){case "string":if(s===r){q=p;}
break;case "object":if(!r.cRegex){r.cRegex=new RegExp(r.regex,r.flags);}
r.cRegex.lastIndex=0;if(r.cRegex.test(s)){q=p;}
break;default:break;}}
return q;}
function j(o,p){p=p||k;return d(o,p)>=0;}
function g(o,p){p=p||n;return d(o,p)>=0;}
function i(q,p){var t,s,o,r={};if(!q){return null;}
if(!p){p=1;}else{p+=1;if(p>5){return "Serialization error: Exceeds nesting limit (5).";}}
for(t in q){if(Object.prototype.hasOwnProperty.call(q,t)){if(!j(t)){s=q[t];switch(typeof s){case "object":if(s instanceof Node){if(s.nodeName){r[t]=s.nodeName.toLowerCase();if(s.id){r[t]+="#"+s.id;}}else{r[t]="DOMNode: unknown";}}else{if(s instanceof Window){r[t]="DOMWindow: "+s.location.href;}else{try{o=JSON.stringify(s);r[t]=i(s,p);}catch(u){r[t]="Serialization error: "+u.message;}}}
break;case "function":break;case "undefined":break;default:r[t]=s;break;}}else{}}}
return r;}
function h(p){var o={type:19,dataLayer:{}};if(!c){return;}
p=p||a();if(!p){return;}
o.dataLayer=i(p);b.post(o);if(e){clearTimeout(e);e=null;}}
return{init:function(){m=b.getConfig();k=m.propertyBlocklist||[];n=m.screenviewBlocklist||[];f=l.getValue(m,"logDelay",500);if(typeof m.dataObject==="string"){m.dataObject=l.access(m.dataObject);}
e=null;c=true;},destroy:function(){m=null;if(e){clearTimeout(e);e=null;}
c=false;},onevent:function(o){if(typeof o!=="object"||!o.type){return;}
switch(o.type){case "load":e=null;break;case "screenview_load":if(!g(o.name)&&!e){e=setTimeout(h,f);}
break;case "logDataLayer":if(!o.data||typeof o.data==="object"){h(o.data);}
break;case "unload":if(e){h();}
break;default:break;}},onmessage:function(o){}};});if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("overstat",function(e){var y=e.utils,p={},A={updateInterval:250,hoverThreshold:1000,hoverThresholdMax:2*60*1000,gridCellMaxX:10,gridCellMaxY:10,gridCellMinWidth:20,gridCellMinHeight:20},d=50;function x(F){var G=e.getConfig()||{},H=G[F];return typeof H==="number"?H:A[F];}
function E(L,F){var K=y.getValue(L,"webEvent.target",{}),G=y.getValue(K,"element.tagName")||"",H=G.toLowerCase()==="input"?y.getValue(K,"element.type"):"",J=y.getTlType(K),I={type:9,event:{hoverDuration:L.hoverDuration,hoverToClick:y.getValue(F,"hoverToClick")},target:{id:K.id||"",idType:K.idType||"",name:K.name||"",tlType:J,type:G,subType:H,position:{width:y.getValue(K,"element.offsetWidth",0),height:y.getValue(K,"element.offsetHeight",0),relXY:L.relXY}}};if(!I.target.id){return;}
if(K.accessibility){I.target.accessibility=K.accessibility;}
if(K.attributes){I.target.attributes=K.attributes;}
e.post(I);}
function i(F){if(F&&!F.nodeType&&F.element){F=F.element;}
return F;}
function s(F){F=i(F);return!F||F===document.body||F===document.html||F===document;}
function j(F){F=i(F);if(!F){return null;}
return F.parentNode;}
function n(F){F=i(F);if(!F){return null;}
return F.offsetParent||F.parentElement||j(F);}
function v(G,H){var F=0;if(!H||H===G){return false;}
H=j(H);while(!s(H)&&F++<d){if(H===G){return true;}
H=j(H);}
if(F>=d){y.clog("Overstat isChildOf() hit iterations limit");}
return false;}
function C(F){if(F.nativeEvent){F=F.nativeEvent;}
return F;}
function h(F){F=i(F);if(!F){return-1;}
return F.nodeType||-1;}
function B(F){F=i(F);if(!F){return "";}
return F.tagName?F.tagName.toUpperCase():"";}
function m(G){var F=B(G);return h(G)!==1||F==="TR"||F==="TBODY"||F==="THEAD";}
function g(F){if(!F){return "";}
if(F.xPath){return F.xPath;}
F=i(F);return e.getXPathFromNode(F);}
function z(G,F){var H=p[G];if(H&&H[F]){return H[F]();}}
function u(G,I,H,F){this.xPath=G!==null?g(G):"";this.domNode=G;this.hoverDuration=0;this.hoverUpdateTime=0;this.gridX=Math.max(I,0);this.gridY=Math.max(H,0);this.parentKey="";this.updateTimer=-1;this.disposed=false;this.childKeys={};this.webEvent=F;this.getKey=function(){return this.xPath+":"+this.gridX+","+this.gridY;};this.update=function(){var K=new Date().getTime(),J=this.getKey();if(this.hoverUpdateTime!==0){this.hoverDuration+=K-this.hoverUpdateTime;}
this.hoverUpdateTime=K;clearTimeout(this.updateTimer);this.updateTimer=setTimeout(function(){z(J,"update");},x("updateInterval"));};this.dispose=function(J){clearTimeout(this.updateTimer);delete p[this.getKey()];this.disposed=true;if(J){var K=this.clone();p[K.getKey()]=K;K.update();}};this.process=function(M){clearTimeout(this.updateTimer);if(this.disposed){return false;}
var K=false,L=this,J=0;if(this.hoverDuration>=x("hoverThreshold")){this.hoverDuration=Math.min(this.hoverDuration,x("hoverThresholdMax"));K=true;E(this,{hoverToClick:!!M});while(typeof L!=="undefined"&&J++<d){L.dispose(M);L=p[L.parentKey];}
if(J>=d){y.clog("Overstat process() hit iterations limit");}}else{this.dispose(M);}
return K;};this.clone=function(){var J=new u(this.domNode,this.gridX,this.gridY);J.parentKey=this.parentKey;return J;};}
function D(H,F,I,G){return new u(H,F,I,G);}
function r(H){if(H&&H.position){return{x:H.position.x,y:H.position.y};}
H=i(H);var F=H&&H.getBoundingClientRect?H.getBoundingClientRect():null,L=F?F.left:H?H.offsetLeft:0,K=F?F.top:H?H.offsetHeight:0,N=L,M=K,I=0,G=0,J=n(H),O=0;while(J&&O++<d){if(s(J)){break;}
I=J.offsetLeft-(J.scrollLeft||0);G=J.offsetTop-(J.scrollTop||0);if(I!==N||G!==M){L+=I;K+=G;N=I;M=G;}
J=n(J);}
if(O>=d){y.clog("Overstat calculateNodeOffset() hit iterations limit");}
if(isNaN(L)){L=0;}
if(isNaN(K)){K=0;}
return{x:L,y:K};}
function a(J,H,G){J=i(J);var I=r(J),F=H-I.x,K=G-I.y;if(!isFinite(F)){F=0;}
if(!isFinite(K)){K=0;}
return{x:F,y:K};}
function w(F,G){F=Math.floor(Math.min(Math.max(F,0),1)*10000)/10000;G=Math.floor(Math.min(Math.max(G,0),1)*10000)/10000;return F+","+G;}
function f(J,M,L){J=i(J);var H=J.getBoundingClientRect?J.getBoundingClientRect():null,R=H?H.width:J.offsetWidth,I=H?H.height:J.offsetHeight,K=R&&R>0?Math.max(R/x("gridCellMaxX"),x("gridCellMinWidth")):x("gridCellMinWidth"),O=I&&I>0?Math.max(I/x("gridCellMaxY"),x("gridCellMinHeight")):x("gridCellMinHeight"),G=Math.min(Math.floor(M/K),x("gridCellMaxX")),F=Math.min(Math.floor(L/O),x("gridCellMaxY")),Q=R>0?M/R:0,N=I>0?L/I:0,P="";if(!isFinite(G)){G=0;}
if(!isFinite(F)){F=0;}
P=w(Q,N);return{x:G,y:F,relXY:P};}
function c(J){var K=J,L=J.getKey(),G={},H=null,I=false,F=0;G[L]=true;while(typeof K!=="undefined"&&F++<d){G[K.parentKey]=true;if(K.parentKey===""||K.parentKey===K.getKey()){break;}
if(F>=d){y.clog("Overstat cleanupHoverEvents() hit iterations limit");}
K=p[K.parentKey];}
for(H in p){if(p.hasOwnProperty(H)&&!G[H]){K=p[H];if(K){if(!I){I=K.process();}else{K.dispose();}}}}}
function t(G,I){var J=null,F=null,H=false;for(F in p){if(p.hasOwnProperty(F)){J=p[F];if(J&&J.domNode===G&&J.getKey()!==I){if(!H){H=J.process();}else{J.dispose();}}}}}
function b(J,H,I){if(!H){H=J.target;}
if(s(H)){return null;}
if(y.isiOS||y.isAndroid){return null;}
var F,O,K,N,L,M,G;if(!m(H)){F=a(H,J.position.x,J.position.y);O=f(H,F.x,F.y);K=new u(H,O.x,O.y,J);K.relXY=O.relXY;N=K.getKey();if(p[N]){K=p[N];}else{p[N]=K;}
K.update();if(!I){G=n(H);if(G){M=b(J,G,true);if(M!==null){L=M.getKey();N=K.getKey();if(N!==L){K.parentKey=L;}}}
c(K);}}else{K=b(J,n(H),I);}
return K;}
function q(F){F=C(F);if(v(F.target,F.relatedTarget)){return;}
t(F.target);}
function l(H){var I=null,F=null,G=false;for(F in p){if(p.hasOwnProperty(F)){I=p[F];if(I){if(!G){G=I.process(true);}else{I.dispose();}}}}}
function o(F){e.performFormCompletion(true);}
function k(G){var F=y.getValue(G,"target.id");if(!F){return;}
switch(G.type){case "mousemove":b(G);break;case "mouseout":q(G);break;case "click":l(G);break;case "submit":o(G);break;default:break;}}
return{init:function(){},destroy:function(){var F;for(F in p){if(p.hasOwnProperty(F)){p[F].dispose();delete p[F];}}},onevent:function(F){if(typeof F!=="object"||!F.type){return;}
k(F);},onmessage:function(F){},createHoverEvent:D,cleanupHoverEvents:c,eventMap:p};});}else{}
if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("performance",function(b){var i={loadReceived:false,unloadReceived:false,perfEventSent:false},d=null,g=0,q,n=b.utils,j=window.location.protocol==="https:",f=[],o,e=0,h,m={enabled:false,resourceTypes:[],blacklist:[]};function s(u){var w=0,t={},x="",v=0;if(!u||typeof u!=="object"||!u.navigationStart){return{};}
w=u.navigationStart;for(x in u){if(Object.prototype.hasOwnProperty.call(u,x)||typeof u[x]==="number"){v=u[x];if(typeof v==="number"&&v&&x!=="navigationStart"){t[x]=v-w;}else{t[x]=v;}}}
return t;}
function c(v){var w=0,u,t;if(v){u=v.responseEnd>0&&v.responseEnd<v.domLoading?v.responseEnd:v.domLoading;t=v.loadEventStart;if(n.isNumeric(u)&&n.isNumeric(t)&&t>u){w=t-u;}}
return w;}
function a(u){var t=b.getStartTime();if(u.timestamp>t&&!g){g=u.timestamp-t;}}
function k(C,w){var z,B,x,v={type:7,performance:{}},A,y,E,D,t,u;if(!C||i.perfEventSent){return;}
E=C.performance||{};u=E.timing;y=E.navigation;if(u){if(!u.loadEventStart&&!w){return;}
v.performance.timing=s(u);v.performance.timing.renderTime=c(u);}else{if(q.calculateRenderTime){v.performance.timing={renderTime:g,calculated:true};}else{return;}}
A=v.performance.timing;if(q.renderTimeThreshold&&A.renderTime>q.renderTimeThreshold){A.invalidRenderTime=A.renderTime;delete A.renderTime;}
if(E.getEntriesByType){D=E.getEntriesByType("paint");for(z=0,B=D.length;z<B;z+=1){t=D[z];if(t.startTime>0){A[t.name]=Math.round(t.startTime);}}}
if(!A["first-paint"]&&A.msFirstPaint){A["first-paint"]=A.msFirstPaint;delete A.msFirstPaint;}
if(y){switch(y.type){case 0:x="NAVIGATE";break;case 1:x="RELOAD";break;case 2:x="BACKFORWARD";break;default:x="UNKNOWN";break;}
v.performance.navigation={type:x,redirectCount:y.redirectCount};}
b.post(v);i.perfEventSent=true;if(d){clearInterval(d);d=null;}}
function p(v){var u={type:20,violations:{}},t=u.violations;if(!v||!v.length){return;}
t.total=v.length;v.splice(10);t.urls=v;b.post(u);}
function l(z){var w,v,x,u=h.blacklist,t,y,A;if(!z||!z.name){return;}
v=z.name;x=z.initiatorType;if(j&&v.indexOf("http:")===0){f.push(v);}
if(h.hasOwnProperty("maxAlerts")&&e>=h.maxAlerts){return;}
if(h.hasOwnProperty("threshold")&&z.duration<h.threshold){return;}
if((z.transferSize&&z.transferSize<z.encodedBodySize)||z.responseStart===z.responseEnd){return;}
if(h.resourceTypes.length>0&&h.resourceTypes.indexOf(x)===-1){return;}
y=false;for(w=0;w<u.length;w+=1){t=u[w];switch(typeof t){case "object":if(!t.cRegex){t.cRegex=new RegExp(t.regex,t.flags);}
t.cRegex.lastIndex=0;if(t.cRegex.test(v)){y=true;}
break;case "string":if(v.indexOf(t)!==-1){y=true;}
break;default:break;}}
if(!y){e+=1;A={urlNormalized:b.normalizeUrl(v,17),url:v,initiator:x,duration:Math.round(z.duration),responseEnd:Math.round(z.responseEnd)};if(typeof z.transferSize!=="undefined"){A.transferSize=z.transferSize;if(z.duration){A.bps=Math.round((z.transferSize/z.duration)*1000);}}
b.post({type:17,resourceData:A});}}
function r(){var t;if(!h.enabled||typeof window.PerformanceObserver!=="function"){return;}
o=new window.PerformanceObserver(function(u,v){n.forEach(u.getEntries(),l);});t=window.performance.getEntriesByType("resource");setTimeout(function(){n.forEach(t,l);});o.observe({entryTypes:["resource"]});}
return{init:function(){q=b.getConfig();h=n.mixin({},m,q.performanceAlert);},destroy:function(){if(d){clearInterval(d);d=null;k(window,true);}
if(o){o.disconnect();}
if(j){p(f);f=[];}
q=null;},onevent:function(t){if(typeof t!=="object"||!t.type){return;}
switch(t.type){case "load":i.loadReceived=true;a(t);if(!i.perfEventSent&&!d){d=setInterval(function(){if(b.isInitialized()){k(window);}},n.getValue(q,"delay",2000));}
r();break;case "screenview_load":if(!i.perfEventSent){k(window);}
break;case "unload":i.unloadReceived=true;if(!i.perfEventSent){k(window);}
break;default:break;}},onmessage:function(t){}};});}else{}
TLT.addModule("replay",function(aj){var ab=aj.utils,O=0,ao={scale:0,timestamp:0},aE={},az=null,D=[],U=0,Y=true,X=null,an=null,v=0,ac="",au="",o=null,W=new Date().getTime(),t=0,aw=null,r="root",ae,I=null,ai=null,ap=null,Z=null,P=null,f={inFocus:false},ay=null,K=aj.getConfig()||{},i=ab.getValue(K,"viewPortWidthHeightLimit",10000),m=1,Q=1,S,g={},u=ab.getValue(K,"mousemove")||{},ah=u.sampleRate,L=u.ignoreRadius,J=null,h=[],w=[],b={},n=0,H=1000,d=0,ax=[],x=[],C=document.visibilityState==="visible"?true:false;function aa(){var aF;for(aF in aE){if(aE.hasOwnProperty(aF)){aE[aF].visitedCount=0;}}}
function aD(aH){var aF=false,aG="|button|image|submit|reset|",aI=null;if(typeof aH!=="object"||!aH.type){return aF;}
switch(aH.type.toLowerCase()){case "input":aI="|"+(aH.subType||"")+"|";aF=aG.indexOf(aI.toLowerCase())!==-1;break;case "select":case "textarea":aF=false;break;default:aF=true;break;}
return aF;}
function av(aG){var aF=[];aG=aG.parentNode;while(aG){aF.push(aG);aG=aG.parentNode;}
return aF;}
function l(aF){return ab.some(aF,function(aH){var aG=ab.getTagName(aH);if(aG==="a"||aG==="button"){return aH;}
return null;});}
function F(aF){var aG=aF.type,aH=aF.target;if(typeof aG==="string"){aG=aG.toLowerCase();}else{aG="unknown";}
if(aG==="blur"){aG="focusout";}
if(aG==="change"){if(aH.type==="INPUT"){switch(aH.subType){case "text":case "date":case "time":aG=aH.subType+"Change";break;default:aG="valueChange";break;}}else{if(aH.type==="TEXTAREA"){aG="textChange";}else{aG="valueChange";}}}
return aG;}
function ar(aF,aJ,aG){var aH,aI,aK;if(document.querySelector(aF)){return true;}
for(aH=0;aH<aJ.length;aH++){aK=aJ[aH];if(aK.querySelector(aF)){return true;}}
for(aH=0;aH<aG.length;aH++){aI=aG[aH];if(aI.querySelector(aF)){return true;}}
return false;}
function aq(aJ,aO,aG){var aM,aK,aP,aI,aQ,aF,aN,aH,aL;for(aM=0;aM<x.length;aM++){aN=x[aM];aK=aN.delayUntil.selector;aP=ab.getValue(aN.delayUntil,"exists",true);aI=aN.delayUntil.dualSnapshot||false;aQ=ar(aK,aO,aG);aF=aN.lastStatus||false;aH=aN.config||{};aL=aN.timerId;if((aP===true&&aQ===true&&aF===false)||(aP===false&&aQ===false&&aF===true)||(aI===true&&aQ===true&&aF===false)||(aI===true&&aQ===false&&aF===true)){aj.performDOMCapture(document,aH);if(!aI||aQ===false){x.splice(aM--,1);if(x.length===0){TLT.registerMutationCallback(aq,false);}
if(aL){clearTimeout(aL);}}}
aN.lastStatus=aQ;}}
function A(aI){var aH,aF,aG;for(aH=0;aH<x.length;aH+=1){aF=x[aH];aG=aF.config||{};if(aG.dcid===aI){aG.timeoutExpired=true;aj.performDOMCapture(document,aG);x.splice(aH--,1);if(x.length===0){TLT.registerMutationCallback(aq,false);}}}}
function k(aF,aH,aG){var aJ=null,aI;if(!aF){return aJ;}
aH=aH||{};aH.eventOn=Y;Y=false;if(aG){aJ="dcid-"+ab.getSerialNumber()+"."+new Date().getTime()+"s";if(typeof aG==="object"){aH.dcid=aJ;aI={config:aH,delayUntil:aG,lastStatus:false};x.push(aI);TLT.registerMutationCallback(aq,true);if(typeof aG.timeout!=="undefined"&&aG.timeout>=0){aI.timerId=window.setTimeout(function(){A(aJ);},aG.timeout);}}else{window.setTimeout(function(){aH.dcid=aJ;aj.performDOMCapture(aF,aH);},aG);}}else{delete aH.dcid;aJ=aj.performDOMCapture(aF,aH);}
return aJ;}
function T(aG,aI){var aH,aF,aJ,aK;for(aH=0,aF=aG.length;aH<aF;aH+=1){aJ=aG[aH];if(aI&&aI.indexOf("#")===0){aK=location.pathname+aI;}else{if(typeof aI==="undefined"||aI===r){aK=location.pathname+location.hash;}else{aK=aI;}}
aK=aj.normalizeUrl(aK,2);switch(typeof aJ){case "object":if(!aJ.cRegex){aJ.cRegex=new RegExp(aJ.regex,aJ.flags);}
aJ.cRegex.lastIndex=0;if(aJ.cRegex.test(aK)){return true;}
break;case "string":if(aJ===aK){return true;}
break;default:break;}}
return false;}
function ak(){var aF=false,aG;if(!u.enabled||window.hasOwnProperty("ontouchstart")){return;}
if(h.length===0){return;}
if(n>=H){aF=true;}
aG={type:18,mousemove:{elements:w.slice(0),data:h.slice(0),config:{ignoreRadius:u.ignoreRadius,sampleRate:u.sampleRate},limitReached:aF,maxInactivity:d}};aj.post(aG);w.length=0;h.length=0;b={};d=0;return aG;}
function aB(aG,aS,aH){var aN,aL,aV=false,aI={},aU=false,aK,aP,aR=null,aM=0,aQ,aO,aF,aJ,aT;if(!aG||(!aS&&!aH)){return aR;}
if(!aS&&!(aG==="load"||aG==="unload")){return aR;}
K=aj.getConfig()||{};aU=ab.getValue(K,"domCapture.enabled",false);if(!aU||ab.isLegacyIE){return aR;}
aT=ab.getValue(K,"domCapture.screenviewBlacklist",[]);if(T(aT,aH)){return aR;}
aP=ab.getValue(K,"domCapture.triggers")||[];for(aN=0,aQ=aP.length;!aV&&aN<aQ;aN+=1){aK=aP[aN];if(aK.event===aG){if(aG==="load"||aG==="unload"){if(aK.screenviews){aF=aK.screenviews;for(aL=0,aJ=aF.length;!aV&&aL<aJ;aL+=1){aO=aF[aL];switch(typeof aO){case "object":if(!aO.cRegex){aO.cRegex=new RegExp(aO.regex,aO.flags);}
aO.cRegex.lastIndex=0;aV=aO.cRegex.test(aH);break;case "string":aV=aO===aH;break;default:break;}}}else{aV=true;}}else{if(aK.targets){aV=-1!==ab.matchTarget(aK.targets,aS);}else{aV=true;}}}
if(aK.event==="change"&&aK.delayUntil){ax=ax.concat(aK.targets);}}
if(aV){aM=aK.delay||aK.delayUntil||(aK.event==="load"?7:0);aI.forceFullDOM=!!aK.fullDOMCapture;aR=k(window.document,aI,aM);if(aR){ak();}}
return aR;}
function at(aN){var aH,aI=ab.getValue(aN,"webEvent.target",{}),aF=aI.type,aJ=aI.subType||"",aG=ab.getTlType(aI),aK=av(ab.getValue(aI,"element")),aM=null,aL=ab.getValue(aN,"webEvent.subType",null);aH={timestamp:ab.getValue(aN,"webEvent.timestamp",0),type:4,target:{id:aI.id||"",idType:aI.idType,name:aI.name,tlType:aG,type:aF,position:{width:ab.getValue(aI,"size.width"),height:ab.getValue(aI,"size.height")},currState:aN.currState||null},event:{tlEvent:F(ab.getValue(aN,"webEvent")),type:ab.getValue(aN,"webEvent.type","UNKNOWN")}};if(aI.accessibility){aH.target.accessibility=aI.accessibility;}
if(aI.attributes){aH.target.attributes=aI.attributes;}
if(aJ){aH.target.subType=aJ;}
if(typeof aN.dwell==="number"&&aN.dwell>0){aH.target.dwell=aN.dwell;}
if(typeof aN.visitedCount==="number"){aH.target.visitedCount=aN.visitedCount;}
if(typeof aN.prevState!=="undefined"){aH.prevState=aN.prevState;}
if(aL){aH.event.subType=aL;}
aM=l(aK);aH.target.isParentLink=!!aM;if(aM){if(aM.href){aH.target.currState=aH.target.currState||{};aH.target.currState.href=aH.target.currState.href||aM.href;}
if(aM.value){aH.target.currState=aH.target.currState||{};aH.target.currState.value=aH.target.currState.value||aM.value;}
if(aM.innerText||aM.textContent){aH.target.currState=aH.target.currState||{};aH.target.currState.innerText=ab.trim(aH.target.currState.innerText||aM.innerText||aM.textContent);}}
if(ab.isUndefOrNull(aH.target.currState)){delete aH.target.currState;}
if(ab.isUndefOrNull(aH.target.name)){delete aH.target.name;}
return aH;}
function ag(aF){aj.post(aF);}
function aC(aJ){var aH,aF,aK=aJ.length,aM,aL,aI,aN={mouseout:true,mouseover:true},aG=[];for(aH=0;aH<aK;aH+=1){aM=aJ[aH];if(!aM){continue;}
if(aN[aM.event.type]){aG.push(aM);}else{for(aF=aH+1;aF<aK&&aJ[aF];aF+=1){if(!aN[aJ[aF].event.type]){break;}}
if(aF<aK){aL=aJ[aF];if(aL&&aM.target.id===aL.target.id&&aM.event.type!==aL.event.type){if(aM.event.type==="click"){aI=aM;aM=aL;aL=aI;}
if(aL.event.type==="click"){aM.target.position=aL.target.position;aH+=1;}else{if(aL.event.type==="blur"){aM.target.dwell=aL.target.dwell;aM.target.visitedCount=aL.target.visitedCount;aM.focusInOffset=aL.focusInOffset;aM.target.position=aL.target.position;aH+=1;}}
aJ[aF]=null;aJ[aH]=aM;}}
aG.push(aJ[aH]);}}
for(aM=aG.shift();aM;aM=aG.shift()){aj.post(aM);}
aJ.splice(0,aJ.length);}
function aA(aG){var aI=null,aJ,aL=ab.getValue(aG,"nativeEvent.message"),aH=ab.getValue(aG,"nativeEvent.filename",""),aF=ab.getValue(aG,"nativeEvent.lineno",-1),aK=ab.getValue(aG,"nativeEvent.error");if(typeof aL!=="string"){return;}
if(aH){aH=aj.normalizeUrl(aH,6);}
if(aK&&aK.stack){aJ=aK.stack.toString();}else{aJ=(aL+" "+aH+" "+aF).toString();}
if(g[aJ]){g[aJ].exception.repeats=g[aJ].exception.repeats+1;}else{aI={type:6,exception:{description:aL,url:aH,line:aF}};aj.post(aI);g[aJ]={exception:{description:aL,url:aH,line:aF,repeats:1}};}
v+=1;}
function G(aF,aG){D.push(at({webEvent:aF,id:aG,currState:ab.getValue(aF,"target.state")}));}
function ad(aL,aG,aI){var aH=false,aK,aF,aJ;if(!aL){return;}
if(D.length===0){return;}
aG=aG||(aE[aL]?aE[aL].webEvent:{});if(!aG){return;}
if(aG.type==="blur"||aG.type==="change"){aJ=ab.getValue(aG,"target.state",{});}else{if(aG.target){aJ=ab.getTargetState(aG.target.element)||{};}else{aJ={};}}
if(aJ&&aJ.disabled){aI=true;}
aF=D[D.length-1];if(aE[aL]){aF.focusInOffset=aE[aL].focusInOffset;aF.target.visitedCount=aE[aL].visitedCount;if(aE[aL].focus){aE[aL].dwell=Number(new Date())-aE[aL].focus;aF.target.dwell=aE[aL].dwell;}
if(!aE[aL].processedChange&&aE[aL].prevState&&!aI){if(!ab.isEqual(aE[aL].prevState,aJ)){aG.type="change";aF.event.type=aG.type;aF.event.tlEvent=F(aG);aF.target.prevState=aE[aL].prevState;aF.target.currState=aJ;}}}else{aE[aL]={};}
if(aF.event.type==="click"){if(!aD(aF.target)){aF.target.currState=aJ;aH=true;}}else{if(aF.event.type==="focus"){aH=true;}}
if(aH&&!aI){aF.event.type="blur";aF.event.tlEvent="focusout";}
if(!aF.dcid){aK=aB(aF.event.type,aG.target);if(aK){aF.dcid=aK;}}
if(!aI){f.inFocus=false;}
aE[aL].prevState=aJ?ab.mixin({},aJ):aJ;aC(D);}
function j(aI,aG){var aH=D.length,aF=aH?D[aH-1]:null;if(f.inFocus&&f.target.id===aI){if(!aF||aF.target.id!==aI){G(aG,aI);aE[aI].processedChange=false;aE[aI].processedClick=false;}
return;}
if(f.inFocus){ad(f.target.id,f);}
f=aG;f.inFocus=true;if(!aE[aI]){aE[aI]={};}
aE[aI].focus=f.dwellStart=Number(new Date());aE[aI].focusInOffset=ai?f.dwellStart-Number(ai):-1;if(aG.type==="focus"){aE[aI].prevState=ab.getValue(aG,"target.state");}else{if(aG.type==="click"&&!aE[aI].prevState){aE[aI].prevState=ab.getValue(aG,"target.state");if(aE[aI].prevState&&(aG.target.subType==="checkbox"||aG.target.subType==="radio")){aE[aI].prevState.checked=!aE[aI].prevState.checked;}}}
aE[aI].visitedCount=aE[aI].visitedCount+1||1;aE[aI].webEvent=aG;aE[aI].processedChange=false;aE[aI].processedClick=false;G(aG,aI);}
function N(aK,aH){var aG=false,aI,aJ=D.length,aF=aJ?D[aJ-1]:null;if(!aF){return aG;}
aI=aF.target.id;if(aI!==aK&&aF.target.tltype!=="selectList"){if(aH.type==="focus"||aH.type==="click"||aH.type==="change"||aH.type==="blur"||aH.type==="unload"){ad(aI);aG=true;}}
if(aI===aK&&((aH.type==="click"&&aE[aK].processedClick)||(aH.type==="change"&&aE[aK].processedChange)||(aH.type==="pointerup"&&aE[aK].processedClick&&ab.getValue(aH.target,"state.disabled",false)))){ad(aI,null,true);aG=true;}
return aG;}
function B(aH,aG){var aF;j(aH,aG);aF=D[D.length-1];aF.event.type="change";aF.event.tlEvent=F(aG);aF.target.currState=aG.target.state;if(aE[aH].prevState){aF.target.prevState=aE[aH].prevState;}
aE[aH].webEvent=aG;aE[aH].processedChange=true;if(ab.matchTarget(ax,aG.target)!==-1){ad(aH,aG);}}
function M(aI,aH){var aG,aF;if(aH.target.type==="select"&&ay&&ay.target.id===aI){ay=null;return;}
j(aI,aH);aG=D[D.length-1];if(aG.event.type==="focus"){aG.event.type="click";aG.event.tlEvent=F(aH);}
aF=aH.nativeEvent;if(aF&&(!window.MouseEvent||!(aF instanceof MouseEvent&&aF.detail===0)||(window.PointerEvent&&aF instanceof PointerEvent&&aF.pointerType!==""))){aG.target.position.relXY=ab.getValue(aH,"target.position.relXY");}
if(!aE[aI].processedChange){aE[aI].webEvent=aH;}
aE[aI].processedClick=true;if(aD(aH.target)){ad(aI,aH,true);}
ay=aH;}
function R(aH,aG){var aF=aH;if(!ab.getValue(aG,"target.element.disabled",false)){return;}
switch(aG.type){case "pointerdown":o=aF;break;case "pointerup":if(aF===o){aG.type="click";M(aH,aG);}
o=null;break;}}
function c(aJ){var aH,aN=0,aF=0,aI,aG,aL,aM,aK;if(!u.enabled||window.hasOwnProperty("ontouchstart")){return;}
if(n>=H){return;}
aH={element:{id:aJ.target.id,idType:aJ.target.idType},x:aJ.position.x,y:aJ.position.y,offset:aj.getCurrentOffset()};if(J!==null){aN=aH.offset-J.offset;if(ah&&aN<ah){return;}
aM=Math.abs(aH.x-J.x);aK=Math.abs(aH.y-J.y);aF=aM>aK?aM:aK;if(L&&aF<L){return;}
if(aN>d){d=aN;}}
aI=JSON.stringify(aH.element);aG=b[aI];if(typeof aG==="undefined"){w.push(aH.element);aG=w.length-1;b[aI]=aG;}
aL=ab.getValue(aJ,"target.position.relXY").split(",");h.push([aG,aL[0],aL[1],aH.offset]);n+=1;J=aH;}
function a(aG){var aF=aG.orientation,aH={type:4,event:{type:"orientationchange"},target:{prevState:{orientation:O,orientationMode:ab.getOrientationMode(O)},currState:{orientation:aF,orientationMode:ab.getOrientationMode(aF)}}};ag(aH);O=aF;}
function s(aF){var aI=document.visibilityState==="visible"?true:false,aH={type:4,event:{type:"visibilitychange"},target:{prevState:{visible:C},currState:{visible:aI}}},aG;aG=aB(aF.type,aF.target);if(aG){aH.dcid=aG;}
ag(aH);C=aI;}
function e(aG){var aF=false;if(!aG){return aF;}
aF=ao.scale===aG.scale&&Math.abs(new Date().getTime()-ao.timestamp)<500;return aF;}
function V(aF){ao.scale=aF.scale;ao.rotation=aF.rotation;ao.timestamp=new Date().getTime();}
function E(){var aF,aG;aF=m-Q;if(isNaN(aF)){aG="INVALID";}else{if(aF<0){aG="CLOSE";}else{if(aF>0){aG="OPEN";}else{aG="NONE";}}}
return aG;}
function y(aJ){var aO=document.documentElement||{},aL=document.body||{},aP=window.screen,aG=aP.width,aH=aP.height,aK=ab.getValue(aJ,"orientation",0),aM=!ab.isiOS?aG:Math.abs(aK)===90?aH:aG,aI={type:1,clientState:{pageWidth:Math.max(aL.clientWidth||0,aO.offsetWidth||0,aO.scrollWidth||0),pageHeight:Math.max(aL.clientHeight||0,aO.offsetHeight||0,aO.scrollHeight||0),viewPortWidth:window.innerWidth||aO.clientWidth,viewPortHeight:window.innerHeight||aO.clientHeight,viewPortX:Math.round(window.pageXOffset||(aO||aL).scrollLeft||0),viewPortY:Math.round(window.pageYOffset||(aO||aL).scrollTop||0),deviceOrientation:aK,event:ab.getValue(aJ,"type")}},aN=aI.clientState,aF;an=an||aI;if(aN.event==="unload"&&aN.viewPortHeight===aN.pageHeight&&aN.viewPortWidth===aN.pageWidth){if(an.clientState.viewPortHeight<aN.viewPortHeight){aN.viewPortHeight=an.clientState.viewPortHeight;aN.viewPortWidth=an.clientState.viewPortWidth;}}
if(aN.viewPortY+aN.viewPortHeight>aN.pageHeight){aN.viewPortY=aN.pageHeight-aN.viewPortHeight;}
if(aN.viewPortY<0){aN.viewPortY=0;}
aF=!aN.viewPortWidth?1:aM/aN.viewPortWidth;aN.deviceScale=aF.toFixed(3);aN.viewTime=0;if(ap&&Z){aN.viewTime=Z.getTime()-ap.getTime();}
if(aJ.type==="scroll"){aN.viewPortXStart=an.clientState.viewPortX;aN.viewPortYStart=an.clientState.viewPortY;}
return aI;}
function af(){var aF;if(X){aF=X.clientState;if(aF.viewPortHeight>0&&aF.viewPortHeight<i&&aF.viewPortWidth>0&&aF.viewPortWidth<i){ag(X);}
an=X;X=null;ap=P||ap;Z=null;}
af.timeoutId=0;}
function z(aF){var aG=null;if(ab.isOperaMini){return;}
X=y(aF);if(aF.type==="scroll"||aF.type==="resize"){if(af.timeoutId){window.clearTimeout(af.timeoutId);}
af.timeoutId=window.setTimeout(af,ab.getValue(K,"scrollTimeout",2000));}else{if(aF.type==="touchstart"||aF.type==="load"){if(X){Q=parseFloat(X.clientState.deviceScale);}}else{if(aF.type==="touchend"){if(X){m=parseFloat(X.clientState.deviceScale);af();}}}}
if(aF.type==="load"||aF.type==="unload"){if(aF.type==="unload"&&W){aG=ab.clone(X);aG.clientState.event="attention";aG.clientState.viewTime=new Date().getTime()-W;}
af();if(aG){X=aG;af();}}
return X;}
function am(aG){var aF=ab.getValue(aG,"nativeEvent.touches.length",0);if(aF===2){z(aG);}}
function q(aI){var aH,aG={},aJ=ab.getValue(aI,"nativeEvent.rotation",0)||ab.getValue(aI,"nativeEvent.touches[0].webkitRotationAngle",0),aF=null,aK={type:4,event:{type:"touchend"},target:{id:ab.getValue(aI,"target.id"),idType:ab.getValue(aI,"target.idType")}};aH=ab.getValue(aI,"nativeEvent.changedTouches.length",0)+
ab.getValue(aI,"nativeEvent.touches.length",0);if(aH!==2){return;}
z(aI);aF={rotation:aJ?aJ.toFixed(2):0,scale:m?m.toFixed(2):1};aF.pinch=E();aG.scale=Q?Q.toFixed(2):1;aK.target.prevState=aG;aK.target.currState=aF;ag(aK);}
function al(aP,aI){var aM=["type","name","target.id"],aH=null,aJ,aL,aK=true,aN=10,aG=0,aO=0,aF=0;if(!aP||!aI||typeof aP!=="object"||typeof aI!=="object"){return false;}
for(aJ=0,aL=aM.length;aK&&aJ<aL;aJ+=1){aH=aM[aJ];if(ab.getValue(aP,aH)!==ab.getValue(aI,aH)){aK=false;break;}}
if(aK){aO=ab.getValue(aP,"timestamp");aF=ab.getValue(aI,"timestamp");if(!(isNaN(aO)&&isNaN(aF))){aG=Math.abs(ab.getValue(aP,"timestamp")-ab.getValue(aI,"timestamp"));if(isNaN(aG)||aG>aN){aK=false;}}}
return aK;}
function p(aF){var aH={type:4,event:{tlEvent:F(aF),type:aF.type},target:{id:ab.getValue(aF,"target.id"),idType:ab.getValue(aF,"target.idType"),currState:ab.getValue(aF,"target.state")}},aG;aG=aB(aF.type,aF.target);if(aG){aH.dcid=aG;}
ag(aH);}
return{init:function(){D=[];},destroy:function(){ad(az);D=[];if(af.timeoutId){window.clearTimeout(af.timeoutId);af.timeoutId=0;}},onevent:function(aG){var aM=null,aJ=null,aF,aK,aL,aI,aH=null;if(typeof aG!=="object"||!aG.type){return;}
if(al(aG,aw)){aw=aG;return;}
aw=aG;aM=ab.getValue(aG,"target.id");if(!aE[aM]){aE[aM]={};}
N(aM,aG);switch(aG.type){case "hashchange":break;case "focus":j(aM,aG);break;case "blur":ad(aM,aG);break;case "pointerdown":R(aM,aG);break;case "pointerup":R(aM,aG);break;case "click":M(aM,aG);break;case "change":B(aM,aG);break;case "orientationchange":a(aG);break;case "touchstart":am(aG);break;case "touchend":q(aG);break;case "loadWithFrames":TLT.logScreenviewLoad("rootWithFrames");break;case "load":O=aG.orientation;ap=new Date();if(typeof ab.getOrientationAngle()!=="number"||ab.isAndroid){aK=window.screen.width>window.screen.height?90:0;aF=ab.getOrientationAngle();if(Math.abs(aF)!==aK&&!(aF===180&&aK===0)&&!(aF===270&&aK===90)){ab.isLandscapeZeroDegrees=true;if(Math.abs(aF)===180||Math.abs(aF)===0){O=90;}else{if(Math.abs(aF)===90||Math.abs(aF)===270){O=0;}}}}
setTimeout(function(){if(aj.isInitialized()){z(aG);}},100);if(ab.getValue(K,"forceRootScreenview",false)){ae=r;}else{ae=aj.normalizeUrl(location.hash,2)||r;}
TLT.logScreenviewLoad(ae);break;case "screenview_load":ai=new Date();aa();aJ=aB("load",null,aG.name);break;case "screenview_unload":aJ=aB("unload",null,aG.name);break;case "resize":case "scroll":if(!Z){Z=new Date();}
P=new Date();z(aG);break;case "unload":for(aL in g){if(g.hasOwnProperty(aL)){aI=g[aL].exception;if(aI.repeats>1){aH={type:6,exception:aI};aj.post(aH);}}}
if(D){aC(D);}
Z=new Date();z(aG);if(ae===r||aj.normalizeUrl(location.hash,2)===ae){TLT.logScreenviewUnload(ae);}
break;case "mousemove":c(aG);break;case "error":aA(aG);break;case "visibilitychange":s(aG);break;default:p(aG);break;}
az=aM;return aJ;},onmessage:function(){}};});/*!
* Copyright (c) 2021 Acoustic, L.P. All rights reserved.
*
* NOTICE: This file contains material that is confidential and proprietary to
* Acoustic, L.P. and/or other developers. No license is granted under any intellectual or
* industrial property rights of Acoustic, L.P. except as may be provided in an agreement with
* Acoustic, L.P. Any unauthorized copying or distribution of content from this file is
* prohibited.
*
* README
* https://github.com/acoustic-analytics/UICaptureSDK-Modules/blob/master/AjaxListener/README.md
*/TLT.addModule("ajaxListener",function(c){var l={},h=false,j,p,A,k,u=c.utils;function q(D){var F,B,G,E=false,C=l.urlBlocklist;if(!D||!C){return E;}
for(F=0,B=C.length;!E&&F<B;F+=1){G=C[F];E=G.cRegex.test(D);}
return E;}
function f(D,I,C){var F,B,G={},H=l.filters,E;if(!H||!H.length){return G;}
for(F=0,B=H.length,E=false;!E&&F<B;F+=1){G=H[F];E=true;if(G.url){E=G.url.cRegex.test(D);}
if(E&&G.method){E=G.method.cRegex.test(I);}
if(E&&G.status){E=G.status.cRegex.test(C);}}
if(!E){G=null;}
return G;}
function o(F){var H={},D,B,G,C,E;F=F.split(/[\r\n]+/);for(D=0,B=F.length;D<B;D+=1){G=F[D].split(": ");C=G[0];E=u.rtrim(G[1]);if(C&&C.length){H[C]=E;}}
return H;}
function m(I,E){var H={type:5,customEvent:{name:"ajaxListener",data:{interfaceType:"XHR"}}},D,C=H.customEvent.data,B;if(!I){return;}
D=document.createElement("a");D.href=I.tListener.url;C.originalURL=D.host+(D.pathname[0]==="/"?"":"/")+D.pathname;C.requestURL=c.normalizeUrl?c.normalizeUrl(C.originalURL,3):C.originalURL;C.description="Full Ajax Monitor "+C.requestURL;C.method=I.tListener.method;C.status=I.status;C.statusText=I.statusText||"";C.async=I.tListener.async;C.ajaxResponseTime=I.tListener.end-I.tListener.start;C.locationHref=c.normalizeUrl(document.location.href,3);if(E.requestHeaders){C.requestHeaders=I.tListener.reqHeaders;}
if(E.requestData&&typeof I.tListener.reqData==="string"&&!I.tListener.isSystemXHR){try{C.request=JSON.parse(I.tListener.reqData);}catch(G){C.request=I.tListener.reqData;}}
if(E.responseHeaders){C.responseHeaders=o(I.getAllResponseHeaders());}
if(E.responseData){if(typeof I.responseType==="undefined"){B=I.responseText;}else{if(I.responseType===""||I.responseType==="text"){B=I.response;}else{if(I.responseType==="json"){C.response=I.response;}else{C.response=typeof I.response;}}}
if(B){try{C.response=JSON.parse(B);}catch(F){C.response=B;}}
if(I.responseType){C.responseType=I.responseType;}}
c.post(H);}
function r(D){var F,E={},C=D.entries(),B=C.next();while(!B.done){F=B.value;E[F[0]]=F[1];B=C.next();}
return E;}
function g(B){return r(B);}
function b(B){var D=B;if(!B){return D;}
if(typeof B==="object"&&B.toString().indexOf("FormData")!==-1){D=r(B);}else{if(typeof B==="string"){try{D=JSON.parse(B);}catch(C){D=B;}}}
return D;}
function s(B,E,F){var G={type:5,customEvent:{name:"ajaxListener",data:{interfaceType:"fetch"}}},D,C=G.customEvent.data,H;D=document.createElement("a");D.href=B.url;C.originalURL=D.host+(D.pathname[0]==="/"?"":"/")+D.pathname;C.requestURL=c.normalizeUrl?c.normalizeUrl(C.originalURL,3):C.originalURL;C.description="Full Ajax Monitor "+C.requestURL;C.method=B.initData.method;C.status=E.status;C.statusText=E.statusText||"";C.async=true;C.ajaxResponseTime=B.end-B.start;C.responseType=E.type;C.locationHref=c.normalizeUrl(document.location.href,3);if(F.requestHeaders){if(B.initData.headers&&B.initData.headers.toString().indexOf("Headers")!==-1){C.requestHeaders=g(B.initData.headers);}else{C.requestHeaders=B.initData.headers||"";}}
if(F.requestData&&typeof B.body!=="undefined"&&!B.isSystemXHR){C.request=b(B.body);}
if(F.responseHeaders){C.responseHeaders=g(E.headers);}
if(F.responseData){H=E.headers.get("content-type");if(H&&H.indexOf("application/json")!==-1){E.clone().json().then(function(I){C.response=I;c.post(G);});return;}
if(H&&(H.indexOf("text")!==-1||H.indexOf("xml")!==-1)){E.clone().text().then(function(I){C.response=I;c.post(G);});return;}
C.response="Not logging unsupported response content: "+H;}
c.post(G);}
function n(F){var D,C=F.tListener.url,G=F.tListener.method,B=F.status.toString(),E={requestHeaders:false,requestData:false,responseHeaders:false,responseData:false};D=f(C,G,B);if(D){if(D.log){E=D.log;}
m(F,E);}}
function a(B,F){var E,D=B.url,H=B.initData.method,C=F.status.toString(),G={requestHeaders:false,requestData:false,responseHeaders:false,responseData:false};if(q(D)){return;}
E=f(D,H,C);if(E){if(E.log){G=E.log;}
s(B,F,G);}}
function x(C){var D,B;if(!C||!C.target){return;}
D=C.target;B=D.readyState;if(B===4){D.removeEventListener("readystatechange",x);D.tListener.end=Date.now();n(D);}}
function t(C){var B=C.setRequestHeader;C.setRequestHeader=function(G,E){var F=this,D=F.tListener;if(G&&G.length){D.reqHeaders[G]=E;}
return B.apply(F,arguments);};}
function z(B){var C=B.send;B.send=function(E){var F=this,D=F.tListener;if(E){D.reqData=E;}
D.start=Date.now();return C.apply(F,arguments);};}
function v(C){var D,B,E;B=TLT.getServiceConfig("queue");E=B.queues||[];for(D=0;D<E.length;D+=1){if(E[D].endpoint&&C.indexOf(E[D].endpoint)!==-1){return true;}}
return false;}
function w(E,B,C){var D=this;if(h&&!q(B)){D.addEventListener("readystatechange",x);D.tListener={method:E,url:B,async:typeof C==="undefined"?true:!!C,reqHeaders:{},isSystemXHR:v(B)};t(D);z(D);}
return j.apply(D,arguments);}
function y(){if(XMLHttpRequest){j=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=w;}}
function i(){p=window.fetch;window.fetch=function(D,C){var B={},E;if(typeof D==="object"){B.initData=D;B.url=D.url;B.initData.clone().text().then(function(F){if(F.length>0){B.body=F;}});}else{B.initData=C||{};B.url=D;if(C&&C.body){B.body=C.body;}}
B.isSystemXHR=v(B.url);B.start=Date.now();E=p.apply(this,arguments);return E.then(function(F){B.end=Date.now();a(B,F);return F;});};}
function d(B){if(B&&B.regex){B.cRegex=new RegExp(B.regex,B.flags);}}
function e(D){var E,B,F,G=[],C=u.getValue(D,"skipSafetyCheck",false);if(D&&D.filters){G=D.filters;}
for(E=0,B=G.length;E<B;E+=1){F=G[E];u.forEach([F.url,F.method,F.status],d);}
if(D&&D.urlBlocklist){u.forEach(D.urlBlocklist,d);}
A=u.getValue(D,"xhrEnabled",true)&&window.XMLHttpRequest;if(A&&!C&&(XMLHttpRequest.toString().indexOf("[native code]")===-1||XMLHttpRequest.toString().indexOf("XMLHttpRequest")===-1)){A=false;}
k=u.getValue(D,"fetchEnabled",true)&&window.fetch;if(k&&!C&&window.fetch.toString().indexOf("[native code]")===-1){k=false;}}
return{init:function(){l=c.getConfig();e(l);},destroy:function(){h=false;},onevent:function(B){switch(B.type){case "load":if(A){y();}
if(k){i();}
h=true;break;case "unload":h=false;break;default:break;}},version:"1.3.0"};});