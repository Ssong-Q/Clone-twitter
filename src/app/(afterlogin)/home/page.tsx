import Post from '../_components/Post';
import PostForm from './_components/PostForm';
import Tab from './_components/Tab';
import TabProvider from './_components/TabProvider';

export default function Home() {
  return (
    <main className="w-600pxr border-[#eff3f4] border-r-[1px] border-l-[1px] border-l-solid border-r-solid flex flex-col items-stretch">
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
