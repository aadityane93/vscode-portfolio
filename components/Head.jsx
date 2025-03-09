import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Aaditya Neupane's Profolio."
      />
      <meta
        name="keywords"
      />
      <meta property="og:title" content="Aaditya Neupane's Portfolio" />
      <meta
        property="og:description"
        content="Aaditya Neupane's Profolio."
      />
      <meta property="og:url" content="https://aadityaneupane.com" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Aaditya Neupane',
};
