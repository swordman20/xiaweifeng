import{_ as s,o as e,c as n,e as a}from"./app.166c275a.js";const i={},l=a(`<h1 id="centos9-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#centos9-\u5B89\u88C5mysql" aria-hidden="true">#</a> Centos9 \u5B89\u88C5mysql</h1><p>\u7B2C 1 \u6B65\u3002\u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u786E\u4FDD\u60A8\u7684\u7CFB\u7EDF\u662F\u6700\u65B0\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf clean all
sudo dnf update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B65\u9AA4 2. \u5728 CentOS 9 Stream \u4E0A\u5B89\u88C5 MySQL\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CMySQL \u5728 CentOS 9 Stream \u57FA\u7840\u5B58\u50A8\u5E93\u4E2D\u53EF\u7528\u3002\u8BA9\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 MySQL \u670D\u52A1\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install mysql mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9A8C\u8BC1 MySQL \u5B89\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u73B0\u5728\u542F\u7528 MySQL\uFF08\u7CFB\u7EDF\u542F\u52A8\u65F6\u81EA\u52A8\u542F\u52A8\uFF09\uFF0C\u542F\u52A8 MySQL\uFF0C\u5E76\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u9A8C\u8BC1\u72B6\u6001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status mysqld		\u67E5\u770Bmysql\u670D\u52A1\u72B6\u6001
systemctl start mysqld		\u542F\u52A8mysql\u670D\u52A1
systemctl stop mysqld		\u505C\u6B62mysql\u670D\u52A1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF4\u660E\uFF1A</p><p>\u53EF\u4EE5\u8BBE\u7F6E\u5F00\u673A\u65F6\u542F\u52A8mysql\u670D\u52A1\uFF0C\u907F\u514D\u6BCF\u6B21\u5F00\u673A\u542F\u52A8mysql\u3002\u6267\u884C\u5982\u4E0B\u6307\u4EE4\uFF1A</p><p>systemctl enable mysqld</p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF0C\u6765\u5224\u5B9Amysql\u662F\u5426\u542F\u52A8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -tunlp					\u67E5\u770B\u5DF2\u7ECF\u542F\u52A8\u7684\u670D\u52A1
netstat -tunlp | grep mysql		\u67E5\u770Bmysql\u7684\u670D\u52A1\u4FE1\u606F

ps \u2013ef | grep mysql				\u67E5\u770Bmysql\u8FDB\u7A0B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5907\u6CE8:</p><p>A. netstat\u547D\u4EE4\u7528\u6765\u6253\u5370Linux\u4E2D\u7F51\u7EDC\u7CFB\u7EDF\u7684\u72B6\u6001\u4FE1\u606F\uFF0C\u53EF\u8BA9\u4F60\u5F97\u77E5\u6574\u4E2ALinux\u7CFB\u7EDF\u7684\u7F51\u7EDC\u60C5\u51B5\u3002</p><p>\u53C2\u6570\u8BF4\u660E:</p><p>\u6CA1\u6709\u8BE5\u547D\u4EE4\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>yum install net-tools</code>\u5B89\u88C5</p><p>-l\u6216--listening\uFF1A\u663E\u793A\u76D1\u63A7\u4E2D\u7684\u670D\u52A1\u5668\u7684Socket\uFF1B -n\u6216--numeric\uFF1A\u76F4\u63A5\u4F7F\u7528ip\u5730\u5740\uFF0C\u800C\u4E0D\u901A\u8FC7\u57DF\u540D\u670D\u52A1\u5668\uFF1B -p\u6216--programs\uFF1A\u663E\u793A\u6B63\u5728\u4F7F\u7528Socket\u7684\u7A0B\u5E8F\u8BC6\u522B\u7801\u548C\u7A0B\u5E8F\u540D\u79F0\uFF1B -t\u6216--tcp\uFF1A\u663E\u793ATCP\u4F20\u8F93\u534F\u8BAE\u7684\u8FDE\u7EBF\u72B6\u51B5\uFF1B -u\u6216--udp\uFF1A\u663E\u793AUDP\u4F20\u8F93\u534F\u8BAE\u7684\u8FDE\u7EBF\u72B6\u51B5\uFF1B</p><p>B. ps\u547D\u4EE4\u7528\u4E8E\u67E5\u770BLinux\u4E2D\u7684\u8FDB\u7A0B\u6570\u636E\u3002</p></blockquote><p>\u7B2C\u4E09\u6B65\uFF1A\u4FDD\u62A4 MySQL\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CMySQL \u672A\u52A0\u56FA\u3002<code>mysql_secure_installation</code>\u60A8\u53EF\u4EE5\u4F7F\u7528\u811A\u672C\u4FDD\u62A4 mysqldb\uFF0C\u4F60\u5E94\u8BE5\u4ED4\u7EC6\u9605\u8BFB\u4E0B\u9762\u7684\u6BCF\u4E2A\u6B65\u9AA4\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u5C06\u8BBE\u7F6E\u4E00\u4E2A root \u5BC6\u7801\uFF0C\u5220\u9664\u533F\u540D\u7528\u6237\uFF0C\u7981\u6B62\u8FDC\u7A0B root \u767B\u5F55\uFF0C\u5E76\u5220\u9664\u6D4B\u8BD5\u6570\u636E\u5E93\u548C\u8BBF\u95EE\u5B89\u5168 MySQL\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u50CF\u8FD9\u6837\u914D\u7F6E\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8BBE\u7F6Eroot\u5BC6\u7801
- Set root password? [Y/n] y
#\u8BBE\u7F6E\u5BC6\u7801\u7EA7\u522B
- There are three levels of password validation policy: [0/1/2] 0
#\u5220\u9664\u533F\u540D\u7528\u6237
- Remove anonymous users? [Y/n] y
#\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55
- Disallow root login remotely? [Y/n] n
#\u5220\u9664\u6D4B\u8BD5\u6570\u636E\u5E93
- Remove test database and access to it? [Y/n] y
#\u91CD\u65B0\u52A0\u8F7D\u8868
- Reload privilege tables now? [Y/n] y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542Froot\u8FDC\u7A0B\u767B\u5F55\uFF0C\u5728\u672C\u5730\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>		1\u3001\u8FDE\u63A5\u670D\u52A1\u5668: mysql -u root -p

\u3000\u30002\u3001\u770B\u5F53\u524D\u6240\u6709\u6570\u636E\u5E93\uFF1Ashow databases;

\u3000\u30003\u3001\u8FDB\u5165mysql\u6570\u636E\u5E93\uFF1Ause mysql;

\u3000\u30004\u3001\u67E5\u770Bmysql\u6570\u636E\u5E93\u4E2D\u6240\u6709\u7684\u8868\uFF1Ashow tables;

\u3000\u30005\u3001\u67E5\u770Buser\u8868\u4E2D\u7684\u6570\u636E\uFF1Aselect Host, User from user;

\u3000\u30006\u3001\u4FEE\u6539user\u8868\u4E2D\u7684Host:update user set Host=&#39;%&#39; where User=&#39;root&#39;;

\u3000\u30007\u3001\u6700\u540E\u5237\u65B0\u4E00\u4E0B\uFF1Aflush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u60F3\u8FDE\u63A5\u5230 MySQL \u5E76\u5F00\u59CB\u5411\u5176\u4E2D\u6DFB\u52A0\u6570\u636E\uFF0C\u8BF7\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>mysql8\u8BBE\u7F6E\u7B80\u5355\u5BC6\u7801</strong></p><p>\u7248\u672C\uFF1AMySql 8.0.20</p><p>\u5982\u679C\u8BBE\u7F6E\u5BC6\u7801 123456 \u5728\u4FEE\u6539\u5BC6\u7801\u65F6\u9047\u5230 Your password does not satisfy the current policy requirements</p><p>\u5982\u4F55\u89E3\u51B3\uFF1F \u65B9\u6848\u4E00\uFF1A \u8BBE\u7F6E\u4E00\u4E2A\u7B26\u5408\u89C4\u5219\u7684\u5BC6\u7801\uFF1AAbc123... <code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Abc123...&#39;</code>;</p><p>\u65B9\u6848\u4E8C\uFF1A \u5982\u679C\u4F60\u5C31\u60F3\u8BBE\u7F6E \u5BC6\u7801\u4E3A 123456\uFF0C\u600E\u4E48\u529E\uFF1F</p><p>a\u3001\u5148\u8BBE\u7F6E\u4E3A\u7B26\u5408\u89C4\u8303\u7684\u5BC6\u7801\uFF1A Abc123... <code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Abc123...&#39;</code>;</p><p>b\u3001\u7136\u540E\u67E5\u770B\u5F53\u524D\u9ED8\u8BA4\u89C4\u5219\uFF1A<code>SHOW VARIABLES LIKE &#39;validate_password%&#39;</code>;</p><p><img src="https://gitee.com/xiaweifeng/picgo/raw/master/images/202301102359129.png" alt="img"></p><p>c\u3001\u4FEE\u6539\u6821\u9A8C\u5BC6\u7801\u7B56\u7565\u7B49\u7EA7</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>set global validate_password.policy=LOW;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>d\u3001\u8BBE\u7F6E\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11\u4E3A 6</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>set global validate_password.length=4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>e\u3001\u6700\u540E\u8BBE\u7F6E 1234</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;1234&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C31\u53EF\u4EE5\u4E86</p><h2 id="mysql-\u4E3B\u4ECE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E3B\u4ECE\u914D\u7F6E" aria-hidden="true">#</a> mysql \u4E3B\u4ECE\u914D\u7F6E</h2><h4 id="_1-2-2-\u4E3B\u6570\u636E\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u4E3B\u6570\u636E\u5E93\u914D\u7F6E" aria-hidden="true">#</a> 1.2.2 \u4E3B\u6570\u636E\u5E93\u914D\u7F6E</h4><blockquote><p>\u670D\u52A1\u5668\uFF1A192.168.128.200</p></blockquote><p><strong>1). \u4FEE\u6539Mysql\u6570\u636E\u5E93\u7684\u914D\u7F6E\u6587\u4EF6/etc/my.cnf.d/mysql-server.cnf</strong></p><p>\u5728\u6700\u4E0B\u9762\u589E\u52A0\u914D\u7F6E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>log-bin<span class="token operator">=</span>mysql-bin   <span class="token comment">#[\u5FC5\u987B]\u542F\u7528\u4E8C\u8FDB\u5236\u65E5\u5FD7</span>
server-id<span class="token operator">=</span><span class="token number">200</span>       <span class="token comment">#[\u5FC5\u987B]\u670D\u52A1\u5668\u552F\u4E00ID(\u552F\u4E00\u5373\u53EF)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2). \u91CD\u542FMysql\u670D\u52A1</strong></p><p>\u6267\u884C\u6307\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3). \u521B\u5EFA\u6570\u636E\u540C\u6B65\u7684\u7528\u6237\u5E76\u6388\u6743</strong></p><p>\u767B\u5F55mysql\uFF0C\u5E76\u6267\u884C\u5982\u4E0B\u6307\u4EE4\uFF0C\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFAxiaoming\u7528\u6237\uFF0C\u5BC6\u7801Root@123456</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;share&#39;</span>@<span class="token string">&#39;192.168.128.7&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;Root@123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u67E5\u8BE2xiaoming\u7528\u6237\u662F\u5426\u521B\u5EFA\u6210\u529F</span>
<span class="token keyword">select</span> user, <span class="token function">host</span> from user<span class="token punctuation">;</span>
<span class="token comment">#\u67E5\u8BE2\u6743\u9650</span>
SHOW GRANTS FOR <span class="token string">&#39;share&#39;</span>@<span class="token string">&#39;192.168.128.7&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#\u7ED9share\u7528\u6237\u6388\u6743\uFF0C\u53EF\u4EE5\u662F\u5168\u90E8\uFF0C\u4E5F\u53EF\u4EE5\u662F\u90E8\u5206</span>
GRANT REPLICATION SLAVE ON *.* TO <span class="token string">&#39;xiaoming&#39;</span>@<span class="token string">&#39;192.168.128.7&#39;</span><span class="token punctuation">;</span>
//\u5237\u65B0
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4). \u767B\u5F55Mysql\u6570\u636E\u5E93\uFF0C\u67E5\u770Bmaster\u540C\u6B65\u72B6\u6001</strong></p><p>\u6267\u884C\u4E0B\u9762SQL\uFF0C\u8BB0\u5F55\u4E0B\u7ED3\u679C\u4E2D<strong>File</strong>\u548C<strong>Position</strong>\u7684\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show master status<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6CE8\uFF1A\u4E0A\u9762SQL\u7684\u4F5C\u7528\u662F\u67E5\u770BMaster\u7684\u72B6\u6001\uFF0C\u6267\u884C\u5B8C\u6B64SQL\u540E\u4E0D\u8981\u518D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C</strong></p><h4 id="_1-2-3-\u4ECE\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-3-\u4ECE\u5E93\u914D\u7F6E" aria-hidden="true">#</a> 1.2.3 \u4ECE\u5E93\u914D\u7F6E</h4><blockquote><p>\u670D\u52A1\u5668\uFF1A 192.168.128.201</p></blockquote><p><strong>1). \u4FEE\u6539Mysql\u6570\u636E\u5E93\u7684\u914D\u7F6E\u6587\u4EF6/etc/my.cnf.d/mysql-server.cnf</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server-id=201 	#[\u5FC5\u987B]\u670D\u52A1\u5668\u552F\u4E00ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2). \u91CD\u542FMysql\u670D\u52A1</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3). \u767B\u5F55Mysql\u6570\u636E\u5E93\uFF0C\u8BBE\u7F6E\u4E3B\u5E93\u5730\u5740\u53CA\u540C\u6B65\u4F4D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u505C\u6B62\u4E3B\u4ECE\u670D\u52A1</span>
stop slave<span class="token punctuation">;</span>
<span class="token comment">#\u914D\u7F6E\u8FDC\u7A0B\u670D\u52A1</span>
change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;192.168.200.200&#39;</span>,master_user<span class="token operator">=</span><span class="token string">&#39;xiaoming&#39;</span>,master_password<span class="token operator">=</span><span class="token string">&#39;Root@123456&#39;</span>,master_log_file<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000001&#39;</span>,master_log_pos<span class="token operator">=</span><span class="token number">154</span><span class="token punctuation">;</span>
<span class="token comment">#\u91CD\u542F\u4E3B\u4ECE\u670D\u52A1</span>
start slave<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><p>A. master_host : \u4E3B\u5E93\u7684IP\u5730\u5740</p><p>B. master_user : \u8BBF\u95EE\u4E3B\u5E93\u8FDB\u884C\u4E3B\u4ECE\u590D\u5236\u7684\u7528\u6237\u540D(\u4E0A\u9762\u5728\u4E3B\u5E93\u521B\u5EFA\u7684)</p><p>C. master_password : \u8BBF\u95EE\u4E3B\u5E93\u8FDB\u884C\u4E3B\u4ECE\u590D\u5236\u7684\u7528\u6237\u540D\u5BF9\u5E94\u7684\u5BC6\u7801</p><p>D. master_log_file : \u4ECE\u54EA\u4E2A\u65E5\u5FD7\u6587\u4EF6\u5F00\u59CB\u540C\u6B65(\u4E0A\u8FF0\u67E5\u8BE2master\u72B6\u6001\u4E2D\u5C55\u793A\u7684\u6709)</p><p>E. master_log_pos : \u4ECE\u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u7684\u54EA\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u540C\u6B65(\u4E0A\u8FF0\u67E5\u8BE2master\u72B6\u6001\u4E2D\u5C55\u793A\u7684\u6709)</p></blockquote><p><strong>4). \u67E5\u770B\u4ECE\u6570\u636E\u5E93\u7684\u72B6\u6001</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1ASlave_IO_Running: NO\u5F02\u5E38</strong></p><ol><li>\u6392\u67E5\u95EE\u9898\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6392\u67E5uuid\u662F\u5426\u76F8\u540C
select uuid();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u76F8\u540C\uFF0C\u4FEE\u6539\u6216\u8005\u5220\u9664\u9ED8\u8BA4\u751F\u6210\u7684uuid\uFF0C\u7136\u540E\u91CD\u542Fmysql\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770Buuid
cat /var/lib/mysql/auto.cnf
# \u76F4\u63A5\u5220\u9664
 rm /var/lib/mysql/auto.cnf 
# \u91CD\u542F\u670D\u52A1
 systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>\u6392\u67E5Server_id\u662F\u5426\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show variables like &#39;server_id&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679Csever_id\u90FD\u662F1\uFF0C\u6216\u8005\u90FD\u662F\u4E00\u6837\u7684\u8BDD\uFF0C\u9700\u8981\u91CD\u65B0\u914D\u7F6E\u3002</p></li></ol><p><strong>\u9519\u8BEF\u4E8C\uFF1ASlave_IO_Running:connect</strong></p><p>\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u5E94\u8BE5\u662F\u521B\u5EFA\u7684\u8D26\u53F7\u6743\u9650\u6709\u95EE\u9898\uFF0C\u5EFA\u8BAE\u91CD\u65B0\u521B\u5EFA\u3002</p>`,73),t=[l];function d(r,c){return e(),n("div",null,t)}var p=s(i,[["render",d],["__file","Centos9\u5B89\u88C5mysql.html.vue"]]);export{p as default};
