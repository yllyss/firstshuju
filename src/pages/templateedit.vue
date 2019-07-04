<template>
  <div class="ditContainer">
    <div class="top"></div>
    <div class="ditWarp">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="报表名称" prop="name" style="width: 50%">
          <el-input v-model="ruleForm.name" placeholder="请输入报表名称"></el-input>
        </el-form-item>
        <el-form-item label="报表描述" prop="desc" style="width: 50%">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入报表描述"></el-input>
        </el-form-item>
        <el-form-item label="数据源" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="选择一" value="num1"></el-option>
            <el-option label="选择二" value="num2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SQL脚本" prop="content" style="width: 50%">
          <quill-editor

            class="info-editor"
            v-model="ruleForm.content"
            ref="QuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
          </quill-editor>
        </el-form-item>
        <el-form-item label="新增参数">
          <i class="el-icon-circle-plus-outline" style="cursor:pointer" @click="addDomain"></i>
        </el-form-item>
        <el-form-item>
          <template slot-scope="scope">
            <el-form :model="formList" :inline="true" ref="formList" size="medium">
              <el-row v-for="(item,index) in formList.powerAttrList" :key="index">
                <el-form-item
                  :label="'参数名'"
                  :prop="'powerAttrList.' + index + '.usn'">
                  <el-input style="width: 90px" size="mini" v-model="item.usn" placeholder="参数名"/>
                </el-form-item>
                <el-form-item
                  :label="'描述'"
                  :prop="'powerAttrList.' + index + '.yhm'">
                  <el-input style="width: 90px" size="mini" v-model="item.yhm" placeholder="参数描述"/>
                </el-form-item>
                <el-form-item
                  :label="'规则'"
                  :prop="'powerAttrList.' + index + '.azaz'">
                  <el-input style="width: 90px" size="mini" v-model="item.azaz"  placeholder="[a-zA-Z]"/>
                </el-form-item>
                <el-form-item
                  :label="'参数'"
                  :prop="'powerAttrList.' + index + '.elg'">
                  <el-input style="width: 120px" size="mini" v-model="item.elg"  placeholder="请输入英文字母"/>
                </el-form-item>
                <el-form-item>
                  <i class="el-icon-top" style="cursor:pointer"  @click.prevent="upDomain(item,index)">上移</i>
                </el-form-item>
                <el-form-item>
                  <i class="el-icon-bottom" style="cursor:pointer" @click.prevent="downDomain(item,index)">下移</i>
                </el-form-item>
                <el-form-item>
                  <i class="el-icon-delete" style="cursor:pointer" @click.prevent="removeDomain(item,index)">删除</i>
                </el-form-item>
              </el-row>
            </el-form>
          </template>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
          <el-button type="warning" @click="resetForm('ruleForm')">重置参数</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>

</template>

<script type="text/ecmascript-6">

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image', 'video'],
    ['clean']                                         // remove formatting button
  ]

  import { addQuillTitle } from '../quill-title'
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  export default {
    components: {
      ElForm,
      ElFormItem},
    name: "templateedit",
    data() {
      return {
        formList: {
          powerAttrList: [{
            usn: '',
            yhm: '',
            azaz: '',
            elg:''
          }],
        },

        ruleForm: {
          name: '',
          region: '',
          delivery: false,
          resource: '',
          desc: '',
          content:''
        },
        rules: {
          name: [
            { required: true, message: '请输入报表名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择数据源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写报表描述', trigger: 'blur' }
          ],
          content:[
            { required: true, message: '请填写SQL脚本', trigger: 'blur'}
          ]
        },
        content:null,
        editorOption:{
          modules:{
            toolbar:[
              ['code-block','code'],
            ]
          }
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
        }
      };
    },
    moreRules: {
      fieldSort: [{required: true, message: '请输入排序', trigger: 'change'},
        {
          validator: (rule, value, callback) => {
            if (value < 0) {
              callback(new Error('必须大于0'));
            } else if (value.length > 5) {
              callback(new Error('不超过5位数字'));
            } else if (!value) {
              callback(new Error('排序不能为空'));
            } else {
              callback();
            }
          },
          trigger: 'change',
        },
      ],
    },

    methods: {

      // 删除属性列
      removeRow(index) {
        this.formList.powerAttrList.splice(index, 1);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onEditorBlur(){//失去焦点事件
      },
      onEditorFocus(){//获得焦点事件
      },
      onEditorChange(){//内容改变事件
      },

      removeDomain(item,index) {//删除当前行
        var index = this.formList.powerAttrList.indexOf(item)//当前行索引值
        if (index !== -1) {
          this.formList.powerAttrList.splice(index, 1)
        }
      },
      upDomain(item,index){//上移当前行
        var index = this.formList.powerAttrList.indexOf(item)
        if (index > 0){
          let upData = this.formList.powerAttrList[index - 1]
          this.formList.powerAttrList.splice(index -1 ,1)
          this.formList.powerAttrList.splice(index,0,upData)
        }else {
          alert('已经是第一条，不可上移。');
        }
      },
      downDomain(item){//下移当前行
        var index = this.formList.powerAttrList.indexOf(item)
        if ((index + 1) === this.formList.powerAttrList.length){
          alert('已经是第最后一条，不可下移。');
        }else {
          let downDate = this.formList.powerAttrList[index + 1];
          this.formList.powerAttrList.splice(index + 1, 1);
          this.formList.powerAttrList.splice(index,0, downDate);
        }
      },
      addDomain(){
        this.formList.powerAttrList.push({
          usn: '',
          yhm: '',
          azaz: '',
          elg:''
        });
      }
    },

    mounted(){
      addQuillTitle();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ditContainer{
    width:100%
    position:relative
    .top{
      position absolute
      top:-90px
      left:0
      width: 960px
      height 100px
      background-color:white;
    }

    .ditWarp{
      margin 40px 0 0 0
      height 100%
      background: #fff;
    }
  }

  .domainBtn{
    display flex
    justify-content: space-around
  }

</style>
