import ActionButtons from '@/app/(afterlogin)/_components/ActionButtons';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한글 plugin
import relativeTime from 'dayjs/plugin/relativeTime'; // plugin 기반
import Image from 'next/image';
import Link from 'next/link';
import style from './post.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [],
  };
  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
              style={{ borderRadius: '20px' }}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
