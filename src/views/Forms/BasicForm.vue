<template>
  <div>
    <a-form :layout="formLayout">
      <a-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-radio-group
          default-value="horizontal"
          @change="handleFormLayoutChange"
        >
          <a-radio-button value="horizontal">Horizontal</a-radio-button>
          <a-radio-button value="vertical">Vertical</a-radio-button>
          <a-radio-button value="inline">Inline</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="用户名"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        :validate-status="fieldAStatus"
        :help="fieldAHelp"
      >
        <a-input placeholder="用户名" v-model="fieldA" />
      </a-form-item>
      <a-form-item
        label="Field B"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="input placeholder" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="submitHandle">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      fieldA: "",
      fieldAStatus: "",
      fieldAHelp: ""
    };
  },
  watch: {
    fieldA(val) {
      if (val.length < 6) {
        this.fieldAStatus = "error";
        this.fieldAHelp = "不能小于6个字符";
      } else {
        this.fieldAStatus = "";
        this.fieldAHelp = "";
      }
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    submitHandle() {
      if (this.fieldA.length < 6) {
        this.fieldAStatus = "error";
        this.fieldAHelp = "不能小于6个字符";
      } else {
        this.fieldAStatus = "";
        this.fieldAHelp = "";
      }
    }
  }
};
</script>
