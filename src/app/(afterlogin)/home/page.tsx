import PostForm from './_components/PostForm';
import Tab from './_components/Tab';
import TabProvider from './_components/TabProvider';

export default function Home() {
  return (
    <main>
      <TabProvider>
        <Tab />
        {/* <PostForm /> */}
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
