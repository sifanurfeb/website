export default{
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'judul',
            type: 'String'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'image',
            title: 'gambar',
            type: 'image'
        },
        {
            name: 'content',
            title: 'konten',
            type: 'text'
        },
    ]
}