<template>
  <div>
    <a-form :form="form" layout="horizontal">
      <a-form-item
        label="付款账户"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        {{ step.payAccount }}
      </a-form-item>
      <a-form-item>
        <a-form-item
          label="密码"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            type="password"
            v-decorator="[
              'password',
              {
                initialValue: '',
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
          />
        </a-form-item>
        <a-button type="primary" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left:8px;" @click="handlePre">
          上一步
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      form: this.$form.createForm(this)
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch("form/submitStepForm", { ...step, ...values });
        }
      });
    },
    handlePre() {
      this.$router.push("/form/step-form/info");
    }
  }
};
</script>

<style></style>
