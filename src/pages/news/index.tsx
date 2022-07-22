import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { getSession } from "next-auth/client"
import Head from "next/head"
import { RichText } from "prismic-dom"
import { Header } from "../../components/Header"
import { getPrismicClient } from "../../services/prismic"

import styles from './post.module.scss';

interface PostProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

export default function News({ post }: PostProps) {
    return (
        <>
            <Header>
                <title>{post.title}</title>
            </Header>
            <main>
                <article>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className={styles.postContent}
                    />
                </article>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }

  export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params;

    const prismic = getPrismicClient()

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-PT', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        redirect: {
            destination: `/news/${slug}`,
            permanent: false,
        },
        props: {
            post,
            revalidate: 60 * 60, // 1 hora
        }
    }

}