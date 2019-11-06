import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "© 2018 Company, Inc.";
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).toMatch(msg);
  });
});
