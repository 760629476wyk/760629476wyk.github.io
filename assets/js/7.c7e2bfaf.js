(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{442:function(t,s,a){"use strict";a.r(s);var r=a(33),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"目标端数据库对接授权说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标端数据库对接授权说明"}},[t._v("#")]),t._v(" 目标端数据库对接授权说明")]),t._v(" "),s("p",[t._v("目标端数据库需要提供包括创建表、表数据处理、表结构变更等操作权限，建议为程序创建独立的数据库以及用户。")]),t._v(" "),s("h2",{attrs:{id:"mysql数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库"}},[t._v("#")]),t._v(" MySQL数据库")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("# 1. 创建用户 CREATE USER 'dbz'@'%' IDENTIFIED BY 'password'; # 2. 创建数据库（已有可跳过） CREATE DATABASE `数据库`; # 3. 授权用户操作 GRANT ALL ON `数据库`.`表名` TO 'dbz'; # 4. 授权立即生效 FLUSH PRIVILEGES; # 5. 查看已授权限 SHOW GRANTS FOR 'dbz';")])])]),t._v(" "),s("tbody")]),t._v(" "),s("h2",{attrs:{id:"tidb数据库-待验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tidb数据库-待验证"}},[t._v("#")]),t._v(" TiDB数据库（待验证）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("# 1. 创建用户 CREATE USER 'dbz'@'%' IDENTIFIED BY 'password'; # 2. 创建数据库（已有可跳过） CREATE DATABASE `数据库`; # 3. 授权用户操作 GRANT ALL ON `数据库`.`表名` TO 'dbz'; # 4. 授权立即生效 FLUSH PRIVILEGES; # 5. 查看已授权限 SHOW GRANTS FOR 'dbz';")])])]),t._v(" "),s("tbody")]),t._v(" "),s("h2",{attrs:{id:"postgresql数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql数据库"}},[t._v("#")]),t._v(" PostgreSQL数据库")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("# 1. 创建用户 CREATE USER "),s("strong",[t._v("dbz")]),t._v(" WITH PASSWORD 'password'; # 2. 授权用户表权限 GRANT ALL ON TABLE "),s("strong",[t._v("表名")]),t._v(" TO "),s("strong",[t._v("dbz")]),t._v(";")])])]),t._v(" "),s("tbody")])])}),[],!1,null,null,null);s.default=e.exports}}]);