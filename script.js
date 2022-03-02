articles = [
	{
		thumb: 'assets/images/atomic-habits-thumb.jpg',
		title: 'Atomic Habits',
		date: '21 Februari 2021',
		description: 'Kunci utama kebiasaan yang baik adalah pengulangan terus menerus, bukan kesempurnaan. Setiap pilihan yang kita lakuakn akan menentukan siapa diri kita di masa depan. Kali ini saya akan membahas buku Atomic Habits karya James Clear. Buku ini membahas kalau untuk mengubah kebiasaan harus dimulai dari menjalankan hal kecil dengan disiplin'
	},
	{
		thumb: 'assets/images/sebuah-seni-untuk-bersikap-bodoh-amat-thumb.jpg',
		title: 'Sebuah Seni Untuk Bersikap Bodoh Amat',
		date: '20 Februari 2021',
		description: 'Buku yang memiliki judul asli "The Subtle Art of Not Giving a F*ck" karya Mark Manson ini akan menjelaskan cara-cara simpel untuk membantu siapa saja demi mendapatkan hidup yang lebih bahagia dan mengurangi stres.'
	},
	{
		thumb: 'assets/images/sapiens-thumb.jpg',
		title: 'Sapiens',
		date: '19 Februari 2021',
		description: 'Sebuah buku yang ditulis oleh Yuval Noah Harari ini membahas jejak evolusi species kita, dimulai dari kebangkitan nenek moyang kita hingga keberadaan kita saat ini di era teknologi modern.'
	},
]

for(let i=0; i<articles.length; i++) {
	let content = document.getElementById("content");
	let newArticle = document.createElement('article');
	newArticle.setAttribute('id','article-content');
	newArticle.innerHTML = `
	<div id="article-thumb">
		<img src=${articles[i].thumb} width="150px" alt="img" /> 
	</div>
	<div id="article-info">
		<div id="article-title">${articles[i].title}</div>
		<div id="article-date">${articles[i].date}</div>
		<div id="article-description">${articles[i].description}</div>
		<div id="read-more">Read More</div>
	</div>`;
	content.appendChild(newArticle);
}