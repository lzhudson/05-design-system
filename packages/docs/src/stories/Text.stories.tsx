import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore magnam minus dolores. Tempore aliquam aliquid recusandae repudiandae dolores ipsa dolorum, magni, beatae saepe obcaecati deserunt veniam ducimus. Aut, et velit sint placeat fugiat dolorum modi soluta consectetur id necessitatibus a quam rem totam quod, voluptatibus, impedit tempore qui voluptate maxime provident. Rerum excepturi voluptas ullam reiciendis aut accusantium numquam ad iste facere corrupti cum maiores esse dolorem, mollitia quam ducimus tenetur consequatur? Placeat commodi esse quaerat harum cumque ad tempora laudantium corporis porro! Deserunt voluptates vero eos impedit sed quae, adipisci officiis culpa at, recusandae suscipit excepturi, unde dolore!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
