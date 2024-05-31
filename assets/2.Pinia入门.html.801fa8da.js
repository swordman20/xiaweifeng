import{_ as n,o as s,c as a,e as t}from"./app.166c275a.js";const e={},p=t(`<h1 id="\u4EC0\u4E48\u662Fpinia" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fpinia" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fpinia</h1><p>Pinia \u662F Vue \u7684\u4E13\u5C5E\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u7EC4\u4EF6\u6216\u9875\u9762\u5171\u4EAB\u72B6\u6001\uFF0C\u662F vuex \u72B6\u6001\u7BA1\u7406\u5DE5\u5177\u7684\u66FF\u4EE3\u54C1\uFF0C\u548C Vuex\u76F8\u6BD4\uFF0C\u5177\u5907\u4EE5\u4E0B\u4F18\u52BF</p><ol><li>\u63D0\u4F9B\u66F4\u52A0\u7B80\u5355\u7684API \uFF08\u53BB\u6389\u4E86 mutation \uFF09</li><li>\u63D0\u4F9B\u7B26\u5408\u7EC4\u5408\u5F0FAPI\u98CE\u683C\u7684API \uFF08\u548C Vue3 \u65B0\u8BED\u6CD5\u7EDF\u4E00\uFF09</li><li>\u53BB\u6389\u4E86modules\u7684\u6982\u5FF5\uFF0C\u6BCF\u4E00\u4E2Astore\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757</li><li>\u642D\u914D TypeScript \u4E00\u8D77\u4F7F\u7528\u63D0\u4F9B\u53EF\u9760\u7684\u7C7B\u578B\u63A8\u65AD</li></ol><h1 id="\u521B\u5EFA\u7A7Avue\u9879\u76EE\u5E76\u5B89\u88C5pinia" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7A7Avue\u9879\u76EE\u5E76\u5B89\u88C5pinia" aria-hidden="true">#</a> \u521B\u5EFA\u7A7AVue\u9879\u76EE\u5E76\u5B89\u88C5Pinia</h1><h3 id="_1-\u521B\u5EFA\u7A7Avue\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u7A7Avue\u9879\u76EE" aria-hidden="true">#</a> 1. \u521B\u5EFA\u7A7AVue\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-\u5B89\u88C5pinia\u5E76\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5pinia\u5E76\u6CE8\u518C" aria-hidden="true">#</a> 2. \u5B89\u88C5Pinia\u5E76\u6CE8\u518C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">// \u4EE5\u63D2\u4EF6\u7684\u5F62\u5F0F\u6CE8\u518C</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B9E\u73B0counter" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0counter" aria-hidden="true">#</a> \u5B9E\u73B0counter</h1><blockquote><p>\u6838\u5FC3\u6B65\u9AA4\uFF1A</p><ol><li>\u5B9A\u4E49store</li><li>\u7EC4\u4EF6\u4F7F\u7528store</li></ol></blockquote><p>1- \u5B9A\u4E49store</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E \uFF08state\uFF09</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4FEE\u6539\u6570\u636E\u7684\u65B9\u6CD5 \uFF08action\uFF09</span>
  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4EE5\u5BF9\u8C61\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">,</span>
    increment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2- \u7EC4\u4EF6\u4F7F\u7528store</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 1. \u5BFC\u5165use\u65B9\u6CD5</span>
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/counter&#39;</span>
  <span class="token comment">// 2. \u6267\u884C\u65B9\u6CD5\u5F97\u5230store store\u91CC\u6709\u6570\u636E\u548C\u65B9\u6CD5</span>
  <span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counterStore.increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ counterStore.count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B9E\u73B0getters" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0getters" aria-hidden="true">#</a> \u5B9E\u73B0getters</h1><blockquote><p>getters\u76F4\u63A5\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u636E\uFF08state\uFF09</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// getter (computed)</span>
<span class="token keyword">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5F02\u6B65action" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65action" aria-hidden="true">#</a> \u5F02\u6B65action</h1><blockquote><p>\u601D\u60F3\uFF1Aaction\u51FD\u6570\u65E2\u652F\u6301\u540C\u6B65\u4E5F\u652F\u6301\u5F02\u6B65\uFF0C\u548C\u5728\u7EC4\u4EF6\u4E2D\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u5199\u6CD5\u4FDD\u6301\u4E00\u81F4 \u6B65\u9AA4\uFF1A</p><ol><li>store\u4E2D\u5B9A\u4E49action</li><li>\u7EC4\u4EF6\u4E2D\u89E6\u53D1action</li></ol></blockquote><p>1- store\u4E2D\u5B9A\u4E49action</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">API_URL</span> <span class="token operator">=</span> <span class="token string">&#39;http://geek.itheima.net/v1_0/channels&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">// \u5F02\u6B65action</span>
  <span class="token keyword">const</span> <span class="token function-variable function">loadList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">API_URL</span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>channels
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">,</span>
    loadList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2- \u7EC4\u4EF6\u4E2D\u8C03\u7528action</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/counter&#39;</span>
  <span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8C03\u7528\u5F02\u6B65action</span>
  counterStore<span class="token punctuation">.</span><span class="token function">loadList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in counterStore.list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="storetorefs\u4FDD\u6301\u54CD\u5E94\u5F0F\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#storetorefs\u4FDD\u6301\u54CD\u5E94\u5F0F\u89E3\u6784" aria-hidden="true">#</a> storeToRefs\u4FDD\u6301\u54CD\u5E94\u5F0F\u89E3\u6784</h1><blockquote><p>\u76F4\u63A5\u57FA\u4E8Estore\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\uFF0C\u54CD\u5E94\u5F0F\u6570\u636E\uFF08state\u548Cgetter\uFF09\u4F1A\u4E22\u5931\u54CD\u5E94\u5F0F\u7279\u6027\uFF0C\u4F7F\u7528storeToRefs\u8F85\u52A9\u4FDD\u6301\u54CD\u5E94\u5F0F</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/counter&#39;</span>
  <span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u4F7F\u7528\u5B83storeToRefs\u5305\u88F9\u4E4B\u540E\u89E3\u6784\u4FDD\u6301\u54CD\u5E94\u5F0F</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>counterStore<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> counterStore
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","2.Pinia\u5165\u95E8.html.vue"]]);export{r as default};
