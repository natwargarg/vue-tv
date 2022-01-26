import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import ShowList from "@/components/ShowList.vue";

describe("ShowList.vue", () => {
  const stubShows = { id: 339141, name: 339141, show: [{ image: {} }] };
  const store = createStore({
    state() {
      return { shows: [stubShows] };
    },
  });

  it("renders props.title when passed", () => {
    const title = "new message";
    const wrapper = mount(ShowList, {
      global: {
        plugins: [store],
      },
      props: { title },
    });
    expect(wrapper.text()).toContain(title);
  });
});
