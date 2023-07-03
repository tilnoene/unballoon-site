import { clientConfig } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'

import unballoon_logo from '../assets/images/unballoon_logo.png';

import instagram_icon from '../assets/icon/codeforces_icon.png';
import telegram_icon from '../assets/icon/codeforces_icon.png';
import discord_icon from '../assets/icon/codeforces_icon.png';
import github_icon from '../assets/icon/codeforces_icon.png';
import codeforces_icon from '../assets/icon/codeforces_icon.png';
import Button from '../components/Button';
// import Header from './Header';

import styled from 'styled-components';
import Image from 'next/image'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export const ContainerPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  max-width: 768px;
  color: white;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ContainerCards = styled.div`
  width: 80%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function Blog ({ postsToShow, page, showNext }) {
  const { title, description } = useConfig()

  return (
    <Container title={title} description={description}>
      <ContainerHeader>
        <Image src={unballoon_logo} width={360} />
        <br />
        <h3>
          Grupo de estudos de Programação Competitiva da{' '}
          <a href="https://www.unb.br/" target="_blank" rel="noreferrer">
            Universidade de Brasília
          </a>.
        </h3>
        <br />
        {/* TODO: links não funcionam */}
        {/* TODO: ícones */}
        <ContainerButtons>
          <Button>
            <Image src={instagram_icon} />
            Instagram
          </Button>
          <Button>
            <Image src={discord_icon} />
            Discord
          </Button>
          <Button>
            <Image src={telegram_icon} />
            Telegram
          </Button>
          <Button>
            <Image src={telegram_icon} />
            Anúncios
          </Button>

          <div style={{ width: '100%' }} />

          <Button>
            <Image src={github_icon} />
            GitHub
          </Button>
          <Button>
            <Image src={codeforces_icon} />
            Codeforces
          </Button>
          <Button>
            <Image src={codeforces_icon} />
            Maratonas DF
          </Button>
        </ContainerButtons>

        <br />
        <br />

        {/* <Header /> */}
      </ContainerHeader>
      
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}
