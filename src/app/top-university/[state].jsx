import StateWiseFilterPage from "../../components/StateWiseFilterPage";

export default function StatePage({ state }) {
  return <StateWiseFilterPage state={state} />;
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      state: params.state
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    },
  };
}
