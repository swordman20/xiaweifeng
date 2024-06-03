import{_ as n,o as s,c as e,e as i}from"./app.3222cd28.js";var a="/assets/image-20211129092156020.06bb9a7e.png",l="/assets/image-20211129092210993.1754c922.png",t="/assets/image-20211129100313919.07c9a4e5.png",d="/assets/image-20211129112610729.7f63212a.png";const r={},c=i(`<h1 id="springboot\u6574\u5408ssmp" tabindex="-1"><a class="header-anchor" href="#springboot\u6574\u5408ssmp" aria-hidden="true">#</a> SpringBoot\u6574\u5408SSMP</h1><h2 id="_3-\u57FA\u4E8Espringboot\u5B9E\u73B0ssmp\u6574\u5408" tabindex="-1"><a class="header-anchor" href="#_3-\u57FA\u4E8Espringboot\u5B9E\u73B0ssmp\u6574\u5408" aria-hidden="true">#</a> 3. \u57FA\u4E8ESpringBoot\u5B9E\u73B0SSMP\u6574\u5408</h2><p>\u91CD\u5934\u620F\u6765\u4E86\uFF0CSpringBoot\u4E4B\u6240\u4EE5\u597D\u7528\uFF0C\u5C31\u662F\u5B83\u80FD\u65B9\u4FBF\u5FEB\u6377\u7684\u6574\u5408\u5176\u4ED6\u6280\u672F\uFF0C\u8FD9\u4E00\u90E8\u5206\u54B1\u4EEC\u5C31\u6765\u804A\u804A\u4E00\u4E9B\u6280\u672F\u7684\u6574\u5408\u65B9\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u4E00\u7AE0\u7684\u5B66\u4E60\uFF0C\u5927\u5BB6\u80FD\u591F\u611F\u53D7\u5230SpringBoot\u5230\u5E95\u6709\u591A\u9177\u70AB\u3002\u8FD9\u4E00\u7AE0\u54B1\u4EEC\u5B66\u4E60\u5982\u4E0B\u6280\u672F\u7684\u6574\u5408\u65B9\u5F0F</p><ul><li><p>\u6574\u5408JUnit</p></li><li><p>\u6574\u5408MyBatis</p></li><li><p>\u6574\u5408MyBatis-Plus</p></li><li><p>\u6574\u5408Druid</p></li></ul><p>\u4E0A\u9762\u8FD9\u4E9B\u6280\u672F\u90FD\u6574\u5408\u5B8C\u6BD5\u540E\uFF0C\u6211\u4EEC\u505A\u4E00\u4E2A\u5C0F\u6848\u4F8B\uFF0C\u4E5F\u7B97\u662F\u5B66\u6709\u6240\u7528\u5427\u3002\u6D89\u53CA\u7684\u6280\u672F\u6BD4\u8F83\u591A\uFF0C\u7EFC\u5408\u8FD0\u7528\u4E00\u4E0B\u3002</p><h3 id="_3-1-\u6574\u5408junit" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6574\u5408junit" aria-hidden="true">#</a> 3.1 \u6574\u5408JUnit</h3><p>\u200B SpringBoot\u6280\u672F\u7684\u5B9A\u4F4D\u7528\u4E8E\u7B80\u5316\u5F00\u53D1\uFF0C\u518D\u5177\u4F53\u70B9\u662F\u7B80\u5316Spring\u7A0B\u5E8F\u7684\u5F00\u53D1\u3002\u6240\u4EE5\u5728\u6574\u5408\u4EFB\u610F\u6280\u672F\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4F60\u60F3\u76F4\u89C2\u611F\u89E6\u5230\u7B80\u5316\u7684\u6548\u679C\uFF0C\u4F60\u5FC5\u987B\u5148\u77E5\u9053\u4F7F\u7528\u975ESpringBoot\u6280\u672F\u65F6\u5BF9\u5E94\u7684\u6574\u5408\u662F\u5982\u4F55\u505A\u7684\uFF0C\u7136\u540E\u518D\u770B\u57FA\u4E8ESpringBoot\u7684\u6574\u5408\u662F\u5982\u4F55\u505A\u7684\uFF0C\u624D\u80FD\u6BD4\u5BF9\u51FA\u6765\u7B80\u5316\u5728\u4E86\u54EA\u91CC\u3002</p><p>\u200B \u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u4E0D\u4F7F\u7528SpringBoot\u6280\u672F\u65F6\uFF0CSpring\u6574\u5408JUnit\u7684\u5236\u4F5C\u65B9\u5F0F</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>//\u52A0\u8F7Dspring\u6574\u5408junit\u4E13\u7528\u7684\u7C7B\u8FD0\u884C\u5668
@RunWith(SpringJUnit4ClassRunner.class)
//\u6307\u5B9A\u5BF9\u5E94\u7684\u914D\u7F6E\u4FE1\u606F
@ContextConfiguration(classes = SpringConfig.class)
public class AccountServiceTestCase {
    //\u6CE8\u5165\u4F60\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61
    @Autowired
    private AccountService accountService;
    @Test
    public void testGetById(){
        //\u6267\u884C\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61\u5BF9\u5E94\u7684\u65B9\u6CD5
        System.out.println(accountService.findById(2));
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u5176\u4E2D\u6838\u5FC3\u4EE3\u7801\u662F\u524D\u4E24\u4E2A\u6CE8\u89E3\uFF0C\u7B2C\u4E00\u4E2A\u6CE8\u89E3**@RunWith<strong>\u662F\u8BBE\u7F6ESpring\u4E13\u7528\u4E8E\u6D4B\u8BD5\u7684\u7C7B\u8FD0\u884C\u5668\uFF0C\u7B80\u5355\u8BF4\u5C31\u662FSpring\u7A0B\u5E8F\u6267\u884C\u7A0B\u5E8F\u6709\u81EA\u5DF1\u7684\u4E00\u5957\u72EC\u7ACB\u7684\u8FD0\u884C\u7A0B\u5E8F\u7684\u65B9\u5F0F\uFF0C\u4E0D\u80FD\u4F7F\u7528JUnit\u63D0\u4F9B\u7684\u7C7B\u8FD0\u884C\u65B9\u5F0F\u4E86\uFF0C\u5FC5\u987B\u6307\u5B9A\u4E00\u4E0B\uFF0C\u4F46\u662F\u683C\u5F0F\u662F\u56FA\u5B9A\u7684\uFF0C\u7422\u78E8\u4E00\u4E0B\uFF0C<strong>\u6BCF\u6B21\u90FD\u6307\u5B9A\u4E00\u6837\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u5199\u8D77\u6765\u6CA1\u6709\u6280\u672F\u542B\u91CF\u554A</strong>\uFF0C\u7B2C\u4E8C\u4E2A\u6CE8\u89E3</strong>@ContextConfiguration<strong>\u662F\u7528\u6765\u8BBE\u7F6ESpring\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u6216\u914D\u7F6E\u7C7B\u7684\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u52A0\u8F7DSpring\u7684\u73AF\u5883\u4F60\u8981\u544A\u8BC9Spring\u5177\u4F53\u7684\u73AF\u5883\u914D\u7F6E\u662F\u5728\u54EA\u91CC\u5199\u7684\uFF0C\u867D\u7136\u6BCF\u6B21\u52A0\u8F7D\u7684\u6587\u4EF6\u90FD\u6709\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F46\u662F\u4ED4\u7EC6\u60F3\u60F3\uFF0C\u5982\u679C\u6587\u4EF6\u540D\u662F\u56FA\u5B9A\u7684\uFF0C\u8FD9\u4E2A\u8C8C\u4F3C\u4E5F\u662F\u4E00\u4E2A\u56FA\u5B9A\u683C\u5F0F\u3002\u4F3C\u7136</strong>\u6709\u53EF\u80FD\u662F\u56FA\u5B9A\u683C\u5F0F\uFF0C\u90A3\u5C31\u6709\u53EF\u80FD\u6BCF\u6B21\u90FD\u5199\u4E00\u6837\u7684\u4E1C\u897F\uFF0C\u4E5F\u662F\u4E00\u4E2A\u6CA1\u6709\u6280\u672F\u542B\u91CF\u7684\u5185\u5BB9\u4E66\u5199**\u3002</p><p>\u200B SpringBoot\u5C31\u6293\u4F4F\u4E0A\u8FF0\u4E24\u6761\u6CA1\u6709\u6280\u672F\u542B\u91CF\u7684\u5185\u5BB9\u4E66\u5199\u8FDB\u884C\u5F00\u53D1\u7B80\u5316\uFF0C\u80FD\u8D70\u9ED8\u8BA4\u503C\u7684\u8D70\u9ED8\u8BA4\u503C\uFF0C\u80FD\u4E0D\u5199\u7684\u5C31\u4E0D\u5199\uFF0C\u5177\u4F53\u683C\u5F0F\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>dao<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">BookDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Repository</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run save...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@SpringBootTest
class Springboot04JunitApplicationTests {
    //\u6CE8\u5165\u4F60\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61
    @Autowired
    private BookDao bookDao;
    @Test
    void contextLoads() {
        //\u6267\u884C\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61\u5BF9\u5E94\u7684\u65B9\u6CD5
        bookDao.save();
        System.out.println(&quot;two...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u770B\u770B\u8FD9\u6B21\u7B80\u5316\u6210\u4EC0\u4E48\u6837\u4E86\uFF0C\u4E00\u4E2A\u6CE8\u89E3\u5C31\u641E\u5B9A\u4E86\uFF0C\u800C\u4E14\u8FD8\u6CA1\u6709\u53C2\u6570\uFF0C\u518D\u4F53\u4F1ASpringBoot\u6574\u5408\u5176\u4ED6\u6280\u672F\u7684\u4F18\u52BF\u5728\u54EA\u91CC\uFF0C\u5C31\u4E24\u4E2A\u5B57<strong>\u7B80\u5316</strong>\u3002\u4F7F\u7528\u4E00\u4E2A\u6CE8\u89E3**@SpringBootTest**\u66FF\u6362\u4E86\u524D\u9762\u4E24\u4E2A\u6CE8\u89E3\u3002\u81F3\u4E8E\u5185\u90E8\u662F\u600E\u4E48\u56DE\u4E8B\uFF1F\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u90FD\u8D70\u9ED8\u8BA4\u503C\u3002</p><p>\u200B \u8FD9\u4E2A\u65F6\u5019\u6709\u4EBA\u5C31\u95EE\u4E86\uFF0C\u4F60\u52A0\u8F7D\u7684\u914D\u7F6E\u7C7B\u6216\u8005\u914D\u7F6E\u6587\u4EF6\u662F\u54EA\u4E00\u4E2A\uFF1F\u5C31\u662F\u6211\u4EEC\u524D\u9762\u542F\u52A8\u7A0B\u5E8F\u4F7F\u7528\u7684\u5F15\u5BFC\u7C7B\u3002\u5982\u679C\u60F3\u624B\u5DE5\u6307\u5B9A\u5F15\u5BFC\u7C7B\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u7B2C\u4E00\u79CD\u65B9\u5F0F\u4F7F\u7528\u5C5E\u6027\u7684\u5F62\u5F0F\u8FDB\u884C\uFF0C\u5728\u6CE8\u89E3@SpringBootTest\u4E2D\u6DFB\u52A0classes\u5C5E\u6027\u6307\u5B9A\u914D\u7F6E\u7C7B</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@SpringBootTest(classes = Springboot04JunitApplication.class)
class Springboot04JunitApplicationTests {
    //\u6CE8\u5165\u4F60\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61
    @Autowired
    private BookDao bookDao;
    @Test
    void contextLoads() {
        //\u6267\u884C\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61\u5BF9\u5E94\u7684\u65B9\u6CD5
        bookDao.save();
        System.out.println(&quot;two...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u7B2C\u4E8C\u79CD\u65B9\u5F0F\u56DE\u5F52\u539F\u59CB\u914D\u7F6E\u65B9\u5F0F\uFF0C\u4ECD\u7136\u4F7F\u7528@ContextConfiguration\u6CE8\u89E3\u8FDB\u884C\uFF0C\u6548\u679C\u662F\u4E00\u6837\u7684</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@SpringBootTest
@ContextConfiguration(classes = Springboot04JunitApplication.class)
class Springboot04JunitApplicationTests {
    //\u6CE8\u5165\u4F60\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61
    @Autowired
    private BookDao bookDao;
    @Test
    void contextLoads() {
        //\u6267\u884C\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61\u5BF9\u5E94\u7684\u65B9\u6CD5
        bookDao.save();
        System.out.println(&quot;two...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B <strong>\u6E29\u99A8\u63D0\u793A</strong></p><p>\u200B \u4F7F\u7528SpringBoot\u6574\u5408JUnit\u9700\u8981\u4FDD\u969C\u5BFC\u5165test\u5BF9\u5E94\u7684starter\uFF0C\u7531\u4E8E\u521D\u59CB\u5316\u9879\u76EE\u65F6\u6B64\u9879\u662F\u9ED8\u8BA4\u5BFC\u5165\u7684\uFF0C\u6240\u4EE5\u6B64\u5904\u6CA1\u6709\u63D0\u53CA\uFF0C\u5176\u5B9E\u548C\u4E4B\u524D\u5B66\u4E60\u7684\u5185\u5BB9\u4E00\u6837\uFF0C\u7528\u4EC0\u4E48\u6280\u672F\u5BFC\u5165\u5BF9\u5E94\u7684starter\u5373\u53EF\u3002</p><p><strong>\u603B\u7ED3</strong></p><ol><li>\u5BFC\u5165\u6D4B\u8BD5\u5BF9\u5E94\u7684starter</li><li>\u6D4B\u8BD5\u7C7B\u4F7F\u7528@SpringBootTest\u4FEE\u9970</li><li>\u4F7F\u7528\u81EA\u52A8\u88C5\u914D\u7684\u5F62\u5F0F\u6DFB\u52A0\u8981\u6D4B\u8BD5\u7684\u5BF9\u8C61</li><li>\u6D4B\u8BD5\u7C7B\u5982\u679C\u5B58\u5728\u4E8E\u5F15\u5BFC\u7C7B\u6240\u5728\u5305\u6216\u5B50\u5305\u4E2D\u65E0\u9700\u6307\u5B9A\u5F15\u5BFC\u7C7B</li><li><strong>\u6D4B\u8BD5\u7C7B\u5982\u679C\u4E0D\u5B58\u5728\u4E8E\u5F15\u5BFC\u7C7B\u6240\u5728\u7684\u5305\u6216\u5B50\u5305\u4E2D\u9700\u8981\u901A\u8FC7classes\u5C5E\u6027\u6307\u5B9A\u5F15\u5BFC\u7C7B</strong></li></ol><h3 id="_3-2-\u6574\u5408mybatis" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6574\u5408mybatis" aria-hidden="true">#</a> 3.2 \u6574\u5408MyBatis</h3><p>\u200B \u6574\u5408\u5B8CJUnit\u4E0B\u9762\u518D\u6765\u8BF4\u4E00\u4E0B\u6574\u5408MyBatis\uFF0C\u8FD9\u4E2A\u6280\u672F\u662F\u5927\u90E8\u5206\u516C\u53F8\u90FD\u8981\u4F7F\u7528\u7684\u6280\u672F\uFF0C\u52A1\u5FC5\u638C\u63E1\u3002\u5982\u679C\u5BF9Spring\u6574\u5408MyBatis\u4E0D\u719F\u6089\u7684\u5C0F\u4F19\u4F34\u597D\u597D\u590D\u4E60\u4E00\u4E0B\uFF0C\u4E0B\u9762\u5217\u4E3E\u51FA\u539F\u59CB\u6574\u5408\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u4EE5\u914D\u7F6E\u7C7B\u7684\u5F62\u5F0F\u4E3A\u4F8B\u8FDB\u884C</p><ul><li><p>\u5BFC\u5165\u5750\u6807\uFF0CMyBatis\u5750\u6807\u4E0D\u80FD\u5C11\uFF0CSpring\u6574\u5408MyBatis\u8FD8\u6709\u81EA\u5DF1\u4E13\u7528\u7684\u5750\u6807\uFF0C\u6B64\u5916Spring\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u7684jdbc\u5750\u6807\u662F\u5FC5\u987B\u7684\uFF0C\u5269\u4E0B\u8FD8\u6709mysql\u9A71\u52A8\u5750\u6807\uFF0C\u672C\u4F8B\u4E2D\u4F7F\u7528\u4E86Druid\u6570\u636E\u6E90\uFF0C\u8FD9\u4E2A\u5012\u662F\u53EF\u4EE5\u4E0D\u8981</p><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
        &lt;artifactId&gt;druid&lt;/artifactId&gt;
        &lt;version&gt;1.1.16&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
        &lt;artifactId&gt;mybatis&lt;/artifactId&gt;
        &lt;version&gt;3.5.6&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;mysql&lt;/groupId&gt;
        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
        &lt;version&gt;5.1.47&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--1.\u5BFC\u5165mybatis\u4E0Espring\u6574\u5408\u7684jar\u5305--&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
        &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;
        &lt;version&gt;1.3.0&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!--\u5BFC\u5165spring\u64CD\u4F5C\u6570\u636E\u5E93\u5FC5\u9009\u7684\u5305--&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework&lt;/groupId&gt;
        &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Spring\u6838\u5FC3\u914D\u7F6E</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@Configuration
@ComponentScan(&quot;com.itheima&quot;)
@PropertySource(&quot;jdbc.properties&quot;)
public class SpringConfig {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MyBatis\u8981\u4EA4\u7ED9Spring\u63A5\u7BA1\u7684bean</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>//\u5B9A\u4E49mybatis\u4E13\u7528\u7684\u914D\u7F6E\u7C7B
@Configuration
public class MyBatisConfig {
//    \u5B9A\u4E49\u521B\u5EFASqlSessionFactory\u5BF9\u5E94\u7684bean
    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){
        //SqlSessionFactoryBean\u662F\u7531mybatis-spring\u5305\u63D0\u4F9B\u7684\uFF0C\u4E13\u7528\u4E8E\u6574\u5408\u7528\u7684\u5BF9\u8C61
        SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();
        //\u8BBE\u7F6E\u6570\u636E\u6E90\u66FF\u4EE3\u539F\u59CB\u914D\u7F6E\u4E2D\u7684environments\u7684\u914D\u7F6E
        sfb.setDataSource(dataSource);
        //\u8BBE\u7F6E\u7C7B\u578B\u522B\u540D\u66FF\u4EE3\u539F\u59CB\u914D\u7F6E\u4E2D\u7684typeAliases\u7684\u914D\u7F6E
        sfb.setTypeAliasesPackage(&quot;com.itheima.domain&quot;);
        return sfb;
    }
//    \u5B9A\u4E49\u52A0\u8F7D\u6240\u6709\u7684\u6620\u5C04\u914D\u7F6E
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage(&quot;com.itheima.dao&quot;);
        return msc;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6570\u636E\u6E90\u5BF9\u5E94\u7684bean\uFF0C\u6B64\u5904\u4F7F\u7528Druid\u6570\u636E\u6E90</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@Configuration
public class JdbcConfig {
    @Value(&quot;\${jdbc.driver}&quot;)
    private String driver;
    @Value(&quot;\${jdbc.url}&quot;)
    private String url;
    @Value(&quot;\${jdbc.username}&quot;)
    private String userName;
    @Value(&quot;\${jdbc.password}&quot;)
    private String password;

    @Bean(&quot;dataSource&quot;)
    public DataSource dataSource(){
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(url);
        ds.setUsername(userName);
        ds.setPassword(password);
        return ds;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF08properties\u683C\u5F0F\uFF09</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">jdbc.driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">jdbc.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/spring_db?useSSL=false</span>
<span class="token key attr-name">jdbc.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">jdbc.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u683C\u5F0F\u57FA\u672C\u4E0A\u662F\u7B80\u683C\u5F0F\u4E86\uFF0C\u8981\u5199\u7684\u4E1C\u897F\u8FD8\u771F\u4E0D\u5C11\u3002\u4E0B\u9762\u770B\u770BSpringBoot\u6574\u5408MyBaits\u683C\u5F0F</p></li></ul><p><strong>\u6B65\u9AA4\u2460</strong>\uFF1A\u521B\u5EFA\u6A21\u5757\u65F6\u52FE\u9009\u8981\u4F7F\u7528\u7684\u6280\u672F\uFF0CMyBatis\uFF0C\u7531\u4E8E\u8981\u64CD\u4F5C\u6570\u636E\u5E93\uFF0C\u8FD8\u8981\u52FE\u9009\u5BF9\u5E94\u6570\u636E\u5E93</p><p><img src="`+a+'" alt="image-20211129092156020"></p><p><img src="'+l+`" alt="image-20211129092210993"></p><p>\u200B \u6216\u8005\u624B\u5DE5\u5BFC\u5165\u5BF9\u5E94\u6280\u672F\u7684starter\uFF0C\u548C\u5BF9\u5E94\u6570\u636E\u5E93\u7684\u5750\u6807</p><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;dependencies&gt;
    &lt;!--1.\u5BFC\u5165\u5BF9\u5E94\u7684starter--&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
        &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
        &lt;version&gt;2.2.0&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
        &lt;groupId&gt;mysql&lt;/groupId&gt;
        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B65\u9AA4\u2461</strong>\uFF1A\u914D\u7F6E\u6570\u636E\u6E90\u76F8\u5173\u4FE1\u606F\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u4FE1\u606F\u4F60\u8FDE\u63A5\u54EA\u4E2A\u6570\u636E\u5E93\u90FD\u4E0D\u77E5\u9053</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#2.\u914D\u7F6E\u76F8\u5173\u4FE1\u606F</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u5B8C\u4E86\uFF0C\u5C31\u8FD9\u4E48\u591A\uFF0C\u6CA1\u4E86\u3002\u6709\u4EBA\u5C31\u5F88\u7EB3\u95F7\uFF0C\u8FD9\u5C31\u7ED3\u675F\u4E86\uFF1F\u5BF9\uFF0C\u8FD9\u5C31\u7ED3\u675F\u4E86\uFF0CSpringBoot\u628A\u914D\u7F6E\u4E2D\u6240\u6709\u53EF\u80FD\u51FA\u73B0\u7684\u901A\u7528\u914D\u7F6E\u90FD\u7B80\u5316\u4E86\u3002\u4E0B\u9762\u5C31\u53EF\u4EE5\u5199\u4E00\u4E0BMyBatis\u7A0B\u5E8F\u8FD0\u884C\u9700\u8981\u7684Dao\uFF08\u6216\u8005Mapper\uFF09\u5C31\u53EF\u4EE5\u8FD0\u884C\u4E86</p><p><strong>\u5B9E\u4F53\u7C7B</strong></p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>public class Book {
    private Integer id;
    private String type;
    private String name;
    private String description;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6620\u5C04\u63A5\u53E3\uFF08Dao\uFF09</strong></p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@Mapper
public interface BookDao {
    @Select(&quot;select * from tbl_book where id = #{id}&quot;)
    public Book getById(Integer id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5\u7C7B</strong></p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@SpringBootTest
class Springboot05MybatisApplicationTests {
    @Autowired
    private BookDao bookDao;
    @Test
    void contextLoads() {
        System.out.println(bookDao.getById(1));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u5B8C\u7F8E\uFF0C\u5F00\u53D1\u4ECE\u6B64\u53D8\u7684\u5C31\u8FD9\u4E48\u7B80\u5355\u3002\u518D\u4F53\u4F1A\u4E00\u4E0BSpringBoot\u5982\u4F55\u8FDB\u884C\u7B2C\u4E09\u65B9\u6280\u672F\u6574\u5408\u7684\uFF0C\u662F\u4E0D\u662F\u5F88\u4F18\u79C0\uFF1F\u5177\u4F53\u5185\u90E8\u7684\u539F\u7406\u5230\u539F\u7406\u7BC7\u518D\u5C55\u5F00\u8BB2\u89E3</p><p>\u200B **\u6CE8\u610F\uFF1A**\u5F53\u524D\u4F7F\u7528\u7684SpringBoot\u7248\u672C\u662F2.5.4\uFF0C\u5BF9\u5E94\u7684\u5750\u6807\u8BBE\u7F6E\u4E2DMysql\u9A71\u52A8\u4F7F\u7528\u7684\u662F8x\u7248\u672C\u3002\u5F53SpringBoot2.4.3\uFF08\u4E0D\u542B\uFF09\u7248\u672C\u4E4B\u524D\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5C0FBUG\uFF0C\u5C31\u662FMySQL\u9A71\u52A8\u5347\u7EA7\u52308\u4EE5\u540E\u8981\u6C42\u5F3A\u5236\u914D\u7F6E\u65F6\u533A\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u4F1A\u51FA\u95EE\u9898\u3002\u89E3\u51B3\u65B9\u6848\u5F88\u7B80\u5355\uFF0C\u9A71\u52A8url\u4E0A\u9762\u6DFB\u52A0\u4E0A\u5BF9\u5E94\u8BBE\u7F6E\u5C31\u884C\u4E86</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>#2.\u914D\u7F6E\u76F8\u5173\u4FE1\u606F
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC
    username: root
    password: 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u8FD9\u91CC\u8BBE\u7F6E\u7684UTC\u662F\u5168\u7403\u6807\u51C6\u65F6\u95F4\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u82F1\u56FD\u65F6\u95F4\uFF0C\u4E2D\u56FD\u5904\u5728\u4E1C\u516B\u533A\uFF0C\u9700\u8981\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u52A0\u4E0A8\u5C0F\u65F6\uFF0C\u8FD9\u6837\u624D\u80FD\u548C\u4E2D\u56FD\u5730\u533A\u7684\u65F6\u95F4\u5BF9\u5E94\u7684\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u4E0D\u5199UTC\uFF0C\u5199Asia/Shanghai\u4E5F\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>#2.\u914D\u7F6E\u76F8\u5173\u4FE1\u606F
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=Asia/Shanghai
    username: root
    password: 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u5982\u679C\u4E0D\u60F3\u6BCF\u6B21\u90FD\u8BBE\u7F6E\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u4E5F\u53EF\u4EE5\u53BB\u4FEE\u6539mysql\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6mysql.ini\uFF0C\u5728mysqld\u9879\u4E2D\u6DFB\u52A0default-time-zone=+8:00\u4E5F\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u5176\u5B9E\u65B9\u5F0F\u65B9\u6CD5\u5F88\u591A\uFF0C\u8FD9\u91CC\u5C31\u8BF4\u8FD9\u4E48\u591A\u5427\u3002</p><p>\u200B \u6B64\u5916\u5728\u8FD0\u884C\u7A0B\u5E8F\u65F6\u8FD8\u4F1A\u7ED9\u51FA\u4E00\u4E2A\u63D0\u793A\uFF0C\u8BF4\u6570\u636E\u5E93\u9A71\u52A8\u8FC7\u65F6\u7684\u8B66\u544A\uFF0C\u6839\u636E\u63D0\u793A\u4FEE\u6539\u914D\u7F6E\u5373\u53EF\uFF0C\u5F03\u7528<strong>com.mysql.jdbc.Driver</strong>\uFF0C\u6362\u7528<strong>com.mysql.cj.jdbc.Driver</strong>\u3002\u524D\u9762\u7684\u4F8B\u5B50\u4E2D\u5DF2\u7ECF\u66F4\u6362\u4E86\u9A71\u52A8\u4E86\uFF0C\u5728\u6B64\u8BF4\u660E\u4E00\u4E0B\u3002</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>Loading class \`com.mysql.jdbc.Driver&#39;. This is deprecated. The new driver class is \`com.mysql.cj.jdbc.Driver&#39;. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u603B\u7ED3</strong></p><ol><li><p>\u6574\u5408\u64CD\u4F5C\u9700\u8981\u52FE\u9009MyBatis\u6280\u672F\uFF0C\u4E5F\u5C31\u662F\u5BFC\u5165MyBatis\u5BF9\u5E94\u7684starter</p></li><li><p>\u6570\u636E\u5E93\u8FDE\u63A5\u76F8\u5173\u4FE1\u606F\u8F6C\u6362\u6210\u914D\u7F6E</p></li><li><p>\u6570\u636E\u5E93SQL\u6620\u5C04\u9700\u8981\u6DFB\u52A0@Mapper\u88AB\u5BB9\u5668\u8BC6\u522B\u5230</p></li><li><p>MySQL 8.X\u9A71\u52A8\u5F3A\u5236\u8981\u6C42\u8BBE\u7F6E\u65F6\u533A</p><ul><li>\u4FEE\u6539url\uFF0C\u6DFB\u52A0serverTimezone\u8BBE\u5B9A</li><li>\u4FEE\u6539MySQL\u6570\u636E\u5E93\u914D\u7F6E</li></ul></li><li><p>\u9A71\u52A8\u7C7B\u8FC7\u65F6\uFF0C\u63D0\u9192\u66F4\u6362\u4E3Acom.mysql.cj.jdbc.Driver</p></li></ol><h3 id="_3-3-\u6574\u5408mybatis-plus" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6574\u5408mybatis-plus" aria-hidden="true">#</a> 3.3 \u6574\u5408MyBatis-Plus</h3><p>\u200B \u505A\u5B8C\u4E86\u4E24\u79CD\u6280\u672F\u7684\u6574\u5408\u4E86\uFF0C\u5404\u4F4D\u5C0F\u4F19\u4F34\u8981\u5B66\u4F1A\u603B\u7ED3\uFF0C\u6211\u4EEC\u505A\u8FD9\u4E2A\u6574\u5408\u7A76\u7ADF\u54EA\u4E9B\u662F\u6838\u5FC3\uFF1F\u603B\u7ED3\u4E0B\u6765\u5C31\u4E24\u53E5\u8BDD</p><ul><li>\u5BFC\u5165\u5BF9\u5E94\u6280\u672F\u7684starter\u5750\u6807</li><li>\u6839\u636E\u5BF9\u5E94\u6280\u672F\u7684\u8981\u6C42\u505A\u914D\u7F6E</li></ul><p>\u200B \u867D\u7136\u770B\u8D77\u6765\u6709\u70B9\u865A\uFF0C\u4F46\u662F\u786E\u5B9E\u662F\u8FD9\u4E2A\u7406\u513F\uFF0C\u4E0B\u9762\u8D81\u70ED\u6253\u94C1\uFF0C\u518D\u6362\u4E00\u4E2A\u6280\u672F\uFF0C\u770B\u770B\u662F\u4E0D\u662F\u4E0A\u9762\u8FD9\u4E24\u6B65\u3002</p><p>\u200B \u63A5\u4E0B\u6765\u5728MyBatis\u7684\u57FA\u7840\u4E0A\u518D\u5347\u7EA7\u4E00\u4E0B\uFF0C\u6574\u5408MyBaitsPlus\uFF08\u7B80\u79F0MP\uFF09\uFF0C\u56FD\u4EBA\u5F00\u53D1\u7684\u6280\u672F\uFF0C\u7B26\u5408\u4E2D\u56FD\u4EBA\u5F00\u53D1\u4E60\u60EF\uFF0C\u8C01\u7528\u8C01\u77E5\u9053\u3002\u6765\u5427\uFF0C\u4E00\u8D77\u505A\u6574\u5408</p><p><strong>\u6B65\u9AA4\u2460</strong>\uFF1A\u5BFC\u5165\u5BF9\u5E94\u7684starter</p><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;3.4.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u5173\u4E8E\u8FD9\u4E2A\u5750\u6807\uFF0C\u6B64\u5904\u8981\u8BF4\u660E\u4E00\u70B9\uFF0C\u4E4B\u524D\u6211\u4EEC\u770B\u7684starter\u90FD\u662Fspring-boot-starter-\uFF1F\uFF1F\uFF1F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u90FD\u662F\u4E0B\u9762\u7684\u683C\u5F0F</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>Spring-boot-start-***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u200B \u800C\u8FD9\u4E2A\u5750\u6807\u7684\u540D\u5B57\u4E66\u5199\u6BD4\u8F83\u7279\u6B8A\uFF0C\u662F\u7B2C\u4E09\u65B9\u6280\u672F\u540D\u79F0\u5728\u524D\uFF0Cboot\u548Cstarter\u5728\u540E\u3002\u6B64\u5904\u7B80\u5355\u63D0\u4E00\u4E0B\u547D\u540D\u89C4\u8303\uFF0C\u540E\u671F\u539F\u7406\u7BC7\u4F1A\u518D\u8BE6\u7EC6\u8BB2\u89E3</p><table><thead><tr><th>starter\u6240\u5C5E</th><th>\u547D\u540D\u89C4\u5219</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>\u5B98\u65B9\u63D0\u4F9B</td><td>spring-boot-starter-\u6280\u672F\u540D\u79F0</td><td>spring-boot-starter-web <br>spring-boot-starter-test</td></tr><tr><td>\u7B2C\u4E09\u65B9\u63D0\u4F9B</td><td>\u7B2C\u4E09\u65B9\u6280\u672F\u540D\u79F0-spring-boot-starter</td><td>druid-spring-boot-starter</td></tr><tr><td>\u7B2C\u4E09\u65B9\u63D0\u4F9B</td><td>\u7B2C\u4E09\u65B9\u6280\u672F\u540D\u79F0-boot-starter\uFF08\u7B2C\u4E09\u65B9\u6280\u672F\u540D\u79F0\u8FC7\u957F\uFF0C\u7B80\u5316\u547D\u540D\uFF09</td><td>mybatis-plus-boot-starter</td></tr></tbody></table><div color="#f0f"><b>\u6E29\u99A8\u63D0\u793A</b></div><p>\u200B \u6709\u4E9B\u5C0F\u4F19\u4F34\u5728\u521B\u5EFA\u9879\u76EE\u65F6\u60F3\u901A\u8FC7\u52FE\u9009\u7684\u5F62\u5F0F\u627E\u5230\u8FD9\u4E2A\u540D\u5B57\uFF0C\u522B\u7FFB\u4E86\uFF0C\u6CA1\u6709\u3002\u622A\u6B62\u76EE\u524D\uFF0CSpringBoot\u5B98\u7F51\u8FD8\u672A\u6536\u5F55\u6B64\u5750\u6807\uFF0C\u800C\u6211\u4EECIdea\u521B\u5EFA\u6A21\u5757\u65F6\u8BFB\u53D6\u7684\u662FSpringBoot\u5B98\u7F51\u7684Spring Initializr\uFF0C\u6240\u4EE5\u4E5F\u6CA1\u6709\u3002\u5982\u679C\u6362\u7528\u963F\u91CC\u4E91\u7684url\u521B\u5EFA\u9879\u76EE\u53EF\u4EE5\u627E\u5230\u5BF9\u5E94\u7684\u5750\u6807</p><p><strong>\u6B65\u9AA4\u2461</strong>\uFF1A\u914D\u7F6E\u6570\u636E\u6E90\u76F8\u5173\u4FE1\u606F</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#2.\u914D\u7F6E\u76F8\u5173\u4FE1\u606F</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6CA1\u4E86\uFF0C\u5C31\u8FD9\u4E48\u591A\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u5199MyBaitsPlus\u7684\u7A0B\u5E8F\u4E86</p><p><strong>\u6620\u5C04\u63A5\u53E3\uFF08Dao\uFF09</strong></p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@Mapper
public interface BookDao extends BaseMapper&lt;Book&gt; {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6838\u5FC3\u5728\u4E8EDao\u63A5\u53E3\u7EE7\u627F\u4E86\u4E00\u4E2ABaseMapper\u7684\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u4E2D\u5E2E\u52A9\u5F00\u53D1\u8005\u9884\u5B9A\u4E86\u82E5\u5E72\u4E2A\u5E38\u7528\u7684API\u63A5\u53E3\uFF0C\u7B80\u5316\u4E86\u901A\u7528API\u63A5\u53E3\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002</p><img src="`+t+`" alt="image-20211129100313919" style="zoom:80%;"><p>\u200B \u4E0B\u9762\u5C31\u53EF\u4EE5\u5199\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\u8FDB\u884C\u6D4B\u8BD5\u4E86\uFF0C\u6B64\u5904\u7701\u7565\u3002</p><div color="#f0f"><b>\u6E29\u99A8\u63D0\u793A</b></div><p>\u200B \u76EE\u524D\u6570\u636E\u5E93\u7684\u8868\u540D\u5B9A\u4E49\u89C4\u5219\u662Ftbl_\u6A21\u5757\u540D\u79F0\uFF0C\u4E3A\u4E86\u80FD\u548C\u5B9E\u4F53\u7C7B\u76F8\u5BF9\u5E94\uFF0C\u9700\u8981\u505A\u4E00\u4E2A\u914D\u7F6E\uFF0C\u76F8\u5173\u77E5\u8BC6\u5404\u4F4D\u5C0F\u4F19\u4F34\u53EF\u4EE5\u5230MyBatisPlus\u8BFE\u7A0B\u4E2D\u53BB\u5B66\u4E60\uFF0C\u6B64\u5904\u4EC5\u7ED9\u51FA\u89E3\u51B3\u65B9\u6848\u3002\u914D\u7F6Eapplication.yml\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF0C\u8BBE\u7F6E\u6240\u6709\u8868\u540D\u7684\u901A\u7528\u524D\u7F00\u540D</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> tbl_		<span class="token comment">#\u8BBE\u7F6E\u6240\u6709\u8868\u7684\u901A\u7528\u524D\u7F00\u540D\u79F0\u4E3Atbl_</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u603B\u7ED3</strong></p><ol><li>\u624B\u5DE5\u6DFB\u52A0MyBatis-Plus\u5BF9\u5E94\u7684starter</li><li>\u6570\u636E\u5C42\u63A5\u53E3\u4F7F\u7528BaseMapper\u7B80\u5316\u5F00\u53D1</li><li>\u9700\u8981\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u6280\u672F\u65E0\u6CD5\u901A\u8FC7\u52FE\u9009\u786E\u5B9A\u65F6\uFF0C\u9700\u8981\u624B\u5DE5\u6DFB\u52A0\u5750\u6807\u3002</li></ol><h3 id="_3-4-\u6574\u5408druid" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6574\u5408druid" aria-hidden="true">#</a> 3.4 \u6574\u5408Druid</h3><p>\u200B \u4F7F\u7528SpringBoot\u6574\u5408\u4E863\u4E2A\u6280\u672F\u4E86\uFF0C\u53D1\u73B0\u5957\u8DEF\u57FA\u672C\u76F8\u540C\uFF0C\u5BFC\u5165\u5BF9\u5E94\u7684starter\uFF0C\u7136\u540E\u505A\u914D\u7F6E\uFF0C\u5404\u4F4D\u5C0F\u4F19\u4F34\u9700\u8981\u4E00\u76F4\u5F3A\u5316\u8FD9\u5957\u601D\u60F3\u3002\u4E0B\u9762\u518D\u6574\u5408\u4E00\u4E2A\u6280\u672F\uFF0C\u7EE7\u7EED\u6DF1\u5165\u5F3A\u5316\u6B64\u601D\u60F3\u3002</p><p>\u200B \u524D\u9762\u6574\u5408MyBatis\u548CMP\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u7684\u6570\u636E\u6E90\u5BF9\u8C61\u90FD\u662FSpringBoot\u9ED8\u8BA4\u7684\u6570\u636E\u6E90\u5BF9\u8C61\uFF0C\u4E0B\u9762\u6211\u4EEC\u624B\u5DE5\u63A7\u5236\u4E00\u4E0B\uFF0C\u81EA\u5DF1\u6307\u5B9A\u4E86\u4E00\u4E2A\u6570\u636E\u6E90\u5BF9\u8C61\uFF0CDruid\u3002</p><p>\u200B \u5728\u6CA1\u6709\u6307\u5B9A\u6570\u636E\u6E90\u65F6\uFF0C\u6211\u4EEC\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>#2.\u914D\u7F6E\u76F8\u5173\u4FE1\u606F
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=Asia/Shanghai
    username: root
    password: 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6B64\u65F6\u867D\u7136\u6CA1\u6709\u6307\u5B9A\u6570\u636E\u6E90\uFF0C\u4F46\u662F\u6839\u636ESpringBoot\u7684\u5FB7\u884C\uFF0C\u80AF\u5B9A\u5E2E\u6211\u4EEC\u9009\u4E86\u4E00\u4E2A\u5B83\u8BA4\u4E3A\u6700\u597D\u7684\u6570\u636E\u6E90\u5BF9\u8C61\uFF0C\u8FD9\u5C31\u662FHiKari\u3002\u901A\u8FC7\u542F\u52A8\u65E5\u5FD7\u53EF\u4EE5\u67E5\u770B\u5230\u5BF9\u5E94\u7684\u8EAB\u5F71\u3002</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>2021-11-29 09:39:15.202  INFO 12260 --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2021-11-29 09:39:15.208  WARN 12260 --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> com.zaxxer.hikari.util.DriverDataSource  : Registered driver with driverClassName=com.mysql.jdbc.Driver was not found, trying direct instantiation.
2021-11-29 09:39:15.551  INFO 12260 --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u4E0A\u8FF0\u4FE1\u606F\u4E2D\u6BCF\u4E00\u884C\u90FD\u6709HiKari\u7684\u8EAB\u5F71\uFF0C\u5982\u679C\u9700\u8981\u66F4\u6362\u6570\u636E\u6E90\uFF0C\u5176\u5B9E\u53EA\u9700\u8981\u4E24\u6B65\u5373\u53EF\u3002</p><ol><li>\u5BFC\u5165\u5BF9\u5E94\u7684\u6280\u672F\u5750\u6807</li><li>\u914D\u7F6E\u4F7F\u7528\u6307\u5B9A\u7684\u6570\u636E\u6E90\u7C7B\u578B</li></ol><p>\u200B \u4E0B\u9762\u5C31\u5207\u6362\u4E00\u4E0B\u6570\u636E\u6E90\u5BF9\u8C61</p><p><strong>\u6B65\u9AA4\u2460</strong>\uFF1A\u5BFC\u5165\u5BF9\u5E94\u7684\u5750\u6807\uFF08\u6CE8\u610F\uFF0C\u662F\u5750\u6807\uFF0C\u6B64\u5904\u4E0D\u662Fstarter\uFF09</p><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;!--        SpringBoot\u9ED8\u8BA4\u4F7F\u7528HiKari\u4F5C\u4E3A\u6570\u636E\u5E93\u94FE\u63A5\u6C60\uFF0C\u5728\u8FD9\u91CC\u4F7F\u7528Druid\u4F5C\u4E3A\u6570\u636E\u5E93\u94FE\u63A5\u6C60--&gt;
&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
        &lt;artifactId&gt;druid&lt;/artifactId&gt;
        &lt;version&gt;1.1.16&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B65\u9AA4\u2461</strong>\uFF1A\u4FEE\u6539\u914D\u7F6E\uFF0C\u5728\u6570\u636E\u6E90\u914D\u7F6E\u4E2D\u6709\u4E00\u4E2Atype\u5C5E\u6027\uFF0C\u4E13\u7528\u4E8E\u6307\u5B9A\u6570\u636E\u6E90\u7C7B\u578B</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC
    username: root
    password: 1234
    type: com.alibaba.druid.pool.DruidDataSource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u8FD9\u91CC\u5176\u5B9E\u8981\u63D0\u51FA\u4E00\u4E2A\u95EE\u9898\u7684\uFF0C\u76EE\u524D\u7684\u6570\u636E\u6E90\u914D\u7F6E\u683C\u5F0F\u662F\u4E00\u4E2A\u901A\u7528\u683C\u5F0F\uFF0C\u4E0D\u7BA1\u4F60\u6362\u4EC0\u4E48\u6570\u636E\u6E90\u90FD\u53EF\u4EE5\u7528\u8FD9\u79CD\u5F62\u5F0F\u8FDB\u884C\u914D\u7F6E\u3002\u4F46\u662F\u65B0\u7684\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u5982\u679C\u5BF9\u6570\u636E\u6E90\u8FDB\u884C\u4E2A\u6027\u5316\u7684\u914D\u7F6E\uFF0C\u4F8B\u5982\u914D\u7F6E\u6570\u636E\u6E90\u5BF9\u5E94\u7684\u8FDE\u63A5\u6570\u91CF\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u6709\u65B0\u7684\u95EE\u9898\u4E86\u3002\u6BCF\u4E2A\u6570\u636E\u6E90\u6280\u672F\u5BF9\u5E94\u7684\u914D\u7F6E\u540D\u79F0\u90FD\u4E00\u6837\u5417\uFF1F\u80AF\u5B9A\u4E0D\u662F\u554A\uFF0C\u5404\u4E2A\u5382\u5546\u4E0D\u53EF\u80FD\u63D0\u524D\u5546\u91CF\u597D\u90FD\u5199\u4E00\u6837\u7684\u540D\u5B57\u554A\uFF0C\u600E\u4E48\u529E\uFF1F\u5C31\u8981\u4F7F\u7528\u4E13\u7528\u7684\u914D\u7F6E\u683C\u5F0F\u4E86\u3002\u8FD9\u4E2A\u65F6\u5019\u4E0A\u9762\u8FD9\u79CD\u901A\u7528\u683C\u5F0F\u5C31\u4E0D\u80FD\u4F7F\u7528\u4E86\uFF0C\u600E\u4E48\u529E\uFF1F\u8FD8\u80FD\u600E\u4E48\u529E\uFF1F\u6309\u7167SpringBoot\u6574\u5408\u5176\u4ED6\u6280\u672F\u7684\u901A\u7528\u89C4\u5219\u6765\u5957\u554A\uFF0C\u5BFC\u5165\u5BF9\u5E94\u7684starter\uFF0C\u8FDB\u884C\u76F8\u5E94\u7684\u914D\u7F6E\u5373\u53EF\u3002</p><p><strong>\u6B65\u9AA4\u2460</strong>\uFF1A\u5BFC\u5165\u5BF9\u5E94\u7684starter</p><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
        &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;
        &lt;version&gt;1.2.6&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B65\u9AA4\u2461</strong>\uFF1A\u4FEE\u6539\u914D\u7F6E</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>spring:
  datasource:
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC
      username: root
      password: 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6CE8\u610F\u89C2\u5BDF\uFF0C\u914D\u7F6E\u9879\u4E2D\uFF0C\u5728datasource\u4E0B\u9762\u5E76\u4E0D\u662F\u76F4\u63A5\u914D\u7F6Eurl\u8FD9\u4E9B\u5C5E\u6027\u7684\uFF0C\u800C\u662F\u5148\u914D\u7F6E\u4E86\u4E00\u4E2Adruid\u8282\u70B9\uFF0C\u7136\u540E\u518D\u914D\u7F6E\u7684url\u8FD9\u4E9B\u4E1C\u897F\u3002\u8A00\u5916\u4E4B\u610F\uFF0Curl\u8FD9\u4E2A\u5C5E\u6027\u65F6druid\u4E0B\u9762\u7684\u5C5E\u6027\uFF0C\u90A3\u4F60\u80FD\u60F3\u5230\u5417\uFF1F\u9664\u4E86\u8FD94\u4E2A\u5E38\u89C4\u914D\u7F6E\u5916\uFF0C\u8FD8\u6709druid\u4E13\u7528\u7684\u5176\u4ED6\u914D\u7F6E\u3002\u901A\u8FC7\u63D0\u793A\u529F\u80FD\u53EF\u4EE5\u6253\u5F00druid\u76F8\u5173\u7684\u914D\u7F6E\u67E5\u9605</p><img src="`+d+'" alt="image-20211129112610729" style="zoom:80%;"><p>\u200B \u4E0Edruid\u76F8\u5173\u7684\u914D\u7F6E\u8D85\u8FC7200\u6761\u4EE5\u4E0A\uFF0C\u8FD9\u5C31\u544A\u8BC9\u4F60\uFF0C\u5982\u679C\u60F3\u505Adruid\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u4F7F\u7528\u8FD9\u79CD\u683C\u5F0F\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5C55\u5F00\u63CF\u8FF0\u4E86\uFF0C\u592A\u591A\u4E86\u3002</p><p>\u200B \u8FD9\u662F\u6211\u4EEC\u505A\u7684\u7B2C4\u4E2A\u6280\u672F\u7684\u6574\u5408\u65B9\u6848\uFF0C\u8FD8\u662F\u90A3\u4E24\u53E5\u8BDD\uFF1A<strong>\u5BFC\u5165\u5BF9\u5E94starter\uFF0C\u4F7F\u7528\u5BF9\u5E94\u914D\u7F6E</strong>\u3002\u6CA1\u4E86\uFF0CSpringBoot\u6574\u5408\u5176\u4ED6\u6280\u672F\u5C31\u8FD9\u4E48\u7B80\u5355\u7C97\u66B4\u3002</p><p><strong>\u603B\u7ED3</strong></p><ol><li>\u6574\u5408Druid\u9700\u8981\u5BFC\u5165Druid\u5BF9\u5E94\u7684starter</li><li>\u6839\u636EDruid\u63D0\u4F9B\u7684\u914D\u7F6E\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E</li><li>\u6574\u5408\u7B2C\u4E09\u65B9\u6280\u672F\u901A\u7528\u65B9\u5F0F <ul><li>\u5BFC\u5165\u5BF9\u5E94\u7684starter</li><li>\u6839\u636E\u63D0\u4F9B\u7684\u914D\u7F6E\u683C\u5F0F\uFF0C\u914D\u7F6E\u975E\u9ED8\u8BA4\u503C\u5BF9\u5E94\u7684\u914D\u7F6E\u9879</li></ul></li></ol>',101),o=[c];function u(p,v){return s(),e("div",null,o)}var b=n(r,[["render",u],["__file","SpringBoot\u6574\u5408SSMP.html.vue"]]);export{b as default};
