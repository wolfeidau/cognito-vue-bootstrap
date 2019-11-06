import { render } from '@testing-library/vue'
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("renders props.msg when passed", () => {
    const { getByText } = render(Footer)
    getByText('© 2018 Company, Inc.')
  });
});
