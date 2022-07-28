"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[536],{536:(e,s,t)=>{t.r(s),t.d(s,{default:()=>N});var r=t(7313),i=t(1329),o=t(816),a=t.n(o),n=t(8312),h=t(6444),d=t(9422),l=t(4711),u=t(6417);class p extends r.PureComponent{constructor(e){super(e),this.timeZoneChanged=e=>{const{user:s}=this.props;s.timeZone=e,this.setState({timeZone:e})},this.costChanged=e=>{const{user:s}=this.props;s.costPerHour=e||0,this.setState({costPerHour:e})},this.onRemove=()=>{this.props.onRemove(this.props.index)};const{user:{timeZone:s,costPerHour:t=0}}=e;this.state={timeZone:s||"",costPerHour:t}}render(){const{timeZoneChanged:e,costChanged:s,onRemove:t,props:{user:r,userTimezones:i}}=this,o=!1!==r.active;return(0,u.jsxs)("tr",{title:!o&&"User is inactive",children:[(0,u.jsx)("td",{children:(0,u.jsxs)("div",{className:"group-user",children:[(0,u.jsx)("img",{src:r.avatarUrls["32x32"]||r.avatarUrls["48x48"],alt:"",height:32,width:32,className:"pull-left"}),(0,u.jsx)("a",{href:r.self,target:"_blank",rel:"noopener noreferrer",className:o?"link":"link strike-out",children:r.displayName})]})}),(0,u.jsx)("td",{children:r.emailAddress}),(0,u.jsx)("td",{children:(0,l.vW)(r)}),(0,u.jsx)("td",{children:(0,u.jsx)(d.jL,{dataset:i,value:r.timeZone,displayField:"label",valueField:"value",onChange:e,className:"width-perc-100",filter:!0})}),(0,u.jsx)("td",{children:(0,u.jsx)(d.zC,{value:r.costPerHour,onChange:s,keyfilter:"num"})}),(0,u.jsx)("td",{children:(0,u.jsx)(d.zx,{type:"danger",icon:"fa fa-times",onClick:t,style:{marginTop:0}})})]})}}const c=p;class m extends r.PureComponent{constructor(e){super(e),this.setEditMode=e=>this.setState({editMode:e,groupName:this.props.group.name}),this.beginEdit=()=>this.setEditMode(!0),this.endEdit=()=>this.setEditMode(!1),this.setGroupName=e=>this.setState({groupName:e}),this.updateGroupName=()=>{const{props:{group:e,hasGroupWithName:s}}=this;let{groupName:t}=this.state;t=t.trim(),s(t,e)?this.$message.warning(`The group with the name '${t}' already exists!`,"Group already exists"):(this.props.group.name=t,this.endEdit())},(0,n.f3)(this,"MessageService"),this.state={editMode:!1}}render(){const{endEdit:e,setGroupName:s,updateGroupName:t,state:{editMode:r,groupName:i},props:{group:o}}=this;let{beginEdit:a}=this;return o.isJiraGroup&&(a=void 0),r?(0,u.jsxs)("div",{className:"ui-inputgroup",children:[(0,u.jsx)(d.zC,{value:i,maxLength:40,onChange:s}),(0,u.jsx)(d.zx,{type:"success",icon:"fa fa-check",onClick:t}),(0,u.jsx)(d.zx,{type:"danger",icon:"fa fa-undo",onClick:e})]}):(0,u.jsxs)("div",{onClick:a,children:[(0,u.jsxs)("span",{style:{fontWeight:600,fontSize:17},children:[o.name," "]}),"(",o.users.length," users) ",!o.isJiraGroup&&(0,u.jsx)("i",{className:"fa fa-edit"})]})}}const g=m;class x extends r.PureComponent{constructor(e){super(e),this.usersSelected=e=>this.setState({selectedUsers:e,users:this.props.group.users}),this.clearSelection=()=>this.usersSelected([]),this.searchUsers=e=>this.$jira.searchUsers(e),this.removeUser=e=>{const{group:s}=this.props;let{users:t}=s;t.splice(e,1),t=[...t],s.users=t,this.setState({users:t})},this.usernameEntered=e=>{let{selectedUsers:s}=this.state;s&&e&&!s.some((s=>(0,l.vW)(s,!0)===e.toLowerCase()))&&this.$jira.getUserDetails(e).then((e=>{s=[...s],s.push(e),this.setState({selectedUsers:s})}),(()=>{}))},this.onRemove=()=>{this.props.onRemove(this.props.index)},this.setTimezone=e=>{this.props.group.timeZone=e,this.setState({timeZone:e})},(0,n.f3)(this,"JiraService");const{group:{users:s=[],timeZone:t}}=e;this.state={selectedUsers:[],users:s,timeZone:t||""}}addUsersToGroup(){const{props:{group:e},state:{selectedUsers:s}}=this,{users:t}=e,r=t.map((e=>(0,l.vW)(e,!0)));s.removeAll((e=>r.indexOf((0,l.vW)(e,!0))>-1)),t.addRange(s),e.users=t.orderBy((e=>e.displayName)),this.clearSelection()}render(){const{onRemove:e,setTimezone:s,props:{group:t,groupTimezones:r,userTimezones:i,hasGroupWithName:o},state:{selectedUsers:a,users:n,timeZone:h}}=this;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:(0,u.jsx)(g,{group:t,hasGroupWithName:o})}),!t.isJiraGroup&&(0,u.jsxs)("td",{colSpan:2,children:[(0,u.jsx)(d.Qc,{value:a,onChange:this.usersSelected,displayField:"displayName",multiple:!0,minLength:2,forceselection:!0,placeholder:"Add one or more users",onCustomValue:this.usernameEntered,dataset:this.searchUsers,style:{width:"80%"}}),(0,u.jsx)(d.zx,{type:"danger",icon:"fa fa-close",onClick:this.clearSelection}),(0,u.jsx)(d.zx,{type:"success",icon:"fa fa-user-plus",onClick:()=>this.addUsersToGroup(t)})]}),!!t.isJiraGroup&&(0,u.jsx)("td",{colSpan:2,children:"(Users pulled from Jira)"}),(0,u.jsx)("td",{children:(0,u.jsx)(d.jL,{dataset:r,displayField:"label",valueField:"value",value:h||"",onChange:s,className:"width-perc-100",filter:!0})}),(0,u.jsx)("td",{}),(0,u.jsx)("td",{children:(0,u.jsx)(d.zx,{type:"danger",icon:"fa fa-trash",label:t.isJiraGroup?"Remove Group":"Delete group",onClick:e})})]}),(!n||0===n.length)&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:5,children:"No users were available under this group"})}),n&&n.map(((e,s)=>(0,u.jsx)(c,{user:e,index:s,userTimezones:i,onRemove:this.removeUser},(0,l.vW)(e))))]})}}const j=x;class v extends r.PureComponent{constructor(e){super(e),this.addNewGroup=()=>{this.props.addNewGroup(this.state.groupName,this.state.isJiraGroup&&this.state.groupId)&&this.endAdd()},this.setGroupName=e=>this.setState({groupName:e}),this.setAddMode=e=>this.setState({editMode:e,groupName:""}),this.beginAdd=()=>this.setAddMode(!0),this.endAdd=()=>this.setAddMode(!1),this.toggleJiraGroup=e=>this.setState({isJiraGroup:e,groupId:null,groupName:""}),this.searchGroups=e=>this.$jira.searchGroups(e),this.groupSelected=e=>{const{groupId:s,name:t}=e||{};s&&this.setState({groupId:s,groupName:t})},(0,n.f3)(this,"JiraService"),this.state={}}render(){const{endAdd:e,addNewGroup:s,setGroupName:t,toggleJiraGroup:r,props:{isPlugged:i,saveGroups:o,onDone:a},state:{editMode:n,groupName:h,isJiraGroup:l}}=this;return(0,u.jsx)("tfoot",{children:(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:6,children:(0,u.jsxs)("div",{style:{height:30,paddingTop:4},children:[(0,u.jsxs)("div",{className:"pull-left",children:[(0,u.jsx)("div",{className:"ui-inputgroup",hidden:n,children:(0,u.jsx)(d.zx,{type:"success",icon:"fa fa-plus",label:"Add group",onClick:this.beginAdd})}),(0,u.jsxs)("div",{className:"ui-inputgroup",hidden:!n,children:[(0,u.jsx)(d.XZ,{checked:l,onChange:r,label:"Add Jira Group"}),l?(0,u.jsx)(d.Qc,{value:h,onChange:this.groupSelected,displayField:"name",multiple:!1,minLength:2,forceselection:!0,placeholder:"Select Jira Group",dataset:this.searchGroups,style:{width:"185px"}}):(0,u.jsx)(d.zC,{value:h,onChange:t,maxLength:40,placeholder:"Name of new group",onKey_Enter:s}),(0,u.jsx)(d.zx,{type:"success",icon:"fa fa-check",disabled:!h,onClick:s}),(0,u.jsx)(d.zx,{type:"danger",icon:"fa fa-close",onClick:e})]})]}),(0,u.jsxs)("div",{className:"pull-right",children:[i&&(0,u.jsx)("span",{children:"Note: To permanently save the changes, go to Settings -> User groups from menu."}),!i&&(0,u.jsx)(d.zx,{type:"success",icon:"fa fa-save",label:"Save Changes",onClick:o}),i&&(0,u.jsx)(d.zx,{icon:"fa fa-save",label:"Done",onClick:a})]})]})})})})}}const G=v;class f extends r.PureComponent{constructor(e){super(e),this.addNewGroup=async(e,s)=>{var t;if(!(e=null===(t=e)||void 0===t?void 0:t.trim()))return;const{groups:r}=this.state;if(this.hasGroupWithName(e))return this.$message.warning(`The group with the name '${e}' already exists!`,"Group already exists"),!1;{const t={name:e,timeZone:"",users:[],isJiraGroup:!!s,id:s};return t.isJiraGroup?await this.$usergroup.fillJiraGroupMembers([t]):(delete t.isJiraGroup,delete t.id),this.setState({groups:r.concat(t)}),!0}},this.hasGroupWithName=(e,s)=>(e=e.toLowerCase(),this.state.groups.some((t=>t.name.toLowerCase()===e&&t!==s))),this.deleteGroup=e=>{let{groups:s}=this.state;s.splice(e,1),s=[...s],this.setState({groups:s})},this.saveGroups=()=>{this.setState({saveInProg:!0}),this.$usergroup.saveUserGroups(this.state.groups).then((e=>{this.setState({saveInProg:!1}),this.$analytics.trackEvent("User groups saved",h.Jk.UserActions),this.$message.success("Changes saved successfully!","Group saved")}))},this.done=()=>{this.props.onDone&&(this.$analytics.trackEvent("User groups modified",h.Jk.UserActions),this.props.onDone(this.state.groups))},(0,n.f3)(this,"SessionService","MessageService","UserGroupService","JiraService","AnalyticsService");const{groups:s}=e,t=a().tz.names().map((e=>({label:e,value:e})));this.groupTimezones=[{label:"My local time zone",value:""}].union([t]),this.userTimezones=[{label:"My local time zone",value:""},{label:"Use group's time zone",value:"GRP_TZ"}].union([t]),this.state={groups:s}}UNSAFE_componentWillMount(){this.state.groups||this.$usergroup.getUserGroups().then((e=>this.setState({groups:e})))}render(){const{userTimezones:e,props:{isPlugged:s},state:{groups:t}}=this;return(0,u.jsxs)(i.TT,{dataset:t,children:[(0,u.jsx)("caption",{children:"User groups"}),(0,u.jsx)(i.Et,{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{style:{minWidth:215},children:"Group / User Name"}),(0,u.jsx)("th",{children:"User Email"}),(0,u.jsx)("th",{children:"User Login"}),(0,u.jsx)("th",{children:"Timezone"}),(0,u.jsx)("th",{children:"Cost per hour"}),(0,u.jsx)("th",{style:{width:150},children:"Options"})]})}),(0,u.jsx)(i.XP,{children:(s,t)=>(0,u.jsx)(j,{group:s,index:t,hasGroupWithName:this.hasGroupWithName,groupTimezones:this.groupTimezones,userTimezones:e,onRemove:this.deleteGroup},s.name)}),(0,u.jsx)(i.ch,{span:5,children:"No groups available"}),(0,u.jsx)(G,{isPlugged:s,saveGroups:this.saveGroups,onDone:this.done,addNewGroup:this.addNewGroup})]})}}const N=f}}]);