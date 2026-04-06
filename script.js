document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECTING THE ELEMENTS FROM HTML
    const grid = document.getElementById('button-grid');
    const mainPage = document.getElementById('main-page');
    const subPage = document.getElementById('sub-page');
    const pageTitle = document.getElementById('page-title');
    const pageBodyText = document.querySelector('.page-body p'); // The description area
    const newChatBtn = document.getElementById('new-chat-btn');
// --- SEARCH FILTER LOGIC ---
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase(); // What the user typed
    const buttons = document.querySelectorAll('.sop-card-btn'); // All 200 buttons

    buttons.forEach(btn => {
        const btnText = btn.innerText.toLowerCase();
        
        // If the button text contains the search term, show it. Otherwise, hide it.
        if (btnText.includes(term)) {
            btn.style.display = "flex"; // Shows the button
        } else {
            btn.style.display = "none"; // Hides the button
        }
    });
});
    // 2. DATA AREA: DEFINE YOUR SPECIFIC SOPs HERE
    // You can add more names and texts here as needed.
    const sopDatabase = {
        1: { name: "Express_delivery_Query", content: "<B>ONLY IF THE PRODUCT WAS SHIPPED OR OUT FOR DELIVERY<B> <BR><BR>ENGLISH <BR><BR>I understand your concern of urgency, and we are doing our best to get your order delivered as soon as possible. The delivery time depends on a few things like the product type, the seller’s location, and your delivery pin code. Since we work with many sellers across different locations, the delivery date includes the time needed to prepare and ship the order. Your order is already shipped, and we are closely tracking it to ensure it reaches you at the earliest. We request you to please track it from your end as well through the app for the latest updates. We will ensure to deliver on or before the delivery timeline (EDD) <BR><BR>HINGLISH<BR><BR>Main aapki urgency ko samajh sakta hoon, aur hum poori koshish kar rahe hain ki aapka order jald se jald deliver ho jaye. Delivery ka time kuch cheezon par depend karta hai jaise ki product type, seller ki location, aur aapka delivery pin code. Kyunki hum alag-alag locations ke bahut saare sellers ke saath kaam karte hain, isliye delivery date mein order prepare karne aur ship karne ka time bhi shamil hota hai. Aapka order pehle hi ship ho chuka hai, aur hum ise closely track kar rahe hain taaki yeh aap tak jaldi pahunch sake. Hum aapse request karte hain ki latest updates ke liye aap bhi app ke zariye ise track karte rahein. Hum ensure karenge ki delivery timeline (EDD) par ya usse pehle aapko order mil jaye.<BR><BR>BENGALI<BR><BR>আমি আপনার তাড়াহুড়ো বা জরুরি অবস্থার বিষয়টি বুঝতে পারছি এবং আমরা আমাদের যথাসাধ্য চেষ্টা করছি যাতে আপনার অর্ডারটি যত দ্রুত সম্ভব ডেলিভারি করা যায়। ডেলিভারির সময় কিছু বিষয়ের ওপর নির্ভর করে, যেমন—প্রোডাক্টের ধরন, সেলারের অবস্থান এবং আপনার ডেলিভারি পিন কোড। যেহেতু আমরা বিভিন্ন জায়গায় থাকা অনেক সেলারের সাথে কাজ করি, তাই ডেলিভারি তারিখের মধ্যে অর্ডারটি প্রস্তুত করা এবং শিপ করার সময়টুকুও অন্তর্ভুক্ত থাকে। আপনার অর্ডারটি ইতিমধ্যেই শিপ হয়ে গেছে এবং এটি যাতে দ্রুত আপনার কাছে পৌঁছায় তা নিশ্চিত করতে আমরা নিবিড়ভাবে এটি ট্র্যাক করছি। আমরা আপনাকে অনুরোধ করছি যে, লেটেস্ট আপডেটের জন্য আপনিও আপনার অ্যাপের মাধ্যমে এটি ট্র্যাক করুন। আমরা নিশ্চিত করব যাতে ডেলিভারি টাইমলাইনের (EDD) মধ্যে বা তার আগেই এটি ডেলিভারি হয়ে যায়।<BR><BR>Disposition: Call>Shipped>delivery_date_query>Express_delivery_Query" },
        2: { name: "Order_shipped_cant_cancel_COD", content: "<B>ENGLISH <BR><BR>I completely understand that your plans have changed and you’d like to cancel this order. I’m happy to guide you through the most efficient way to handle this. Because your order is already in the final stages of delivery, the most effective way to cancel it now is to simply refuse the package when the delivery partner contacts you. By communicating this over the phone, you can prevent the executive from having to reach your doorstep unnecessarily. Once you decline the delivery, the courier will immediately initiate the return to the seller. As soon as it reaches them, your order will be cancelled on our end. Also, request you to place a fresh order, in case if the same product or any other product is required.<BR><BR>HINGLISH<BR><BR>Main bilkul samajh sakti hoon ki aapke plans badal gaye hain aur aap is order ko cancel karna chahte hain. Main aapko ise handle karne ka sabse efficient tareeka bata deti hoon. Kyunki aapka order pehle se hi delivery ke final stages mein hai, toh ise cancel karne ka sabse effective tareeka yahi hai ki jab delivery partner aapse contact kare, toh aap package lene se mana kar dein. Phone par hi unhe yeh batane se, aap executive ko bina wajah apne ghar tak aane se rok sakte hain. Ek baar jab aap delivery lene se mana kar denge, toh courier turant seller ko return process shuru kar dega. Jaise hi product unke paas pahunchega, aapka order hamari taraf se cancel ho jayega. Saath hi, aapse request hai ki agar aapko wahi product ya koi aur product chahiye ho, toh please ek fresh order place kar dein.<BR><BR>BENGALI<BR><BR>আমি পুরোপুরি বুঝতে পারছি যে আপনার পরিকল্পনা পরিবর্তন হয়েছে এবং আপনি এই অর্ডারটি বাতিল করতে চাইছেন। এটি করার সবচেয়ে কার্যকর উপায়টি আমি আপনাকে জানিয়ে দিচ্ছি। যেহেতু আপনার অর্ডারটি ডেলিভারির একদম শেষ পর্যায়ে রয়েছে, তাই এখন এটি বাতিল করার সবচেয়ে সহজ উপায় হলো—ডেলিভারি পার্টনার যখন আপনার সাথে যোগাযোগ করবেন, তখন পার্সেলটি নিতে সরাসরি অসম্মতি জানানো। ফোনে এটি জানিয়ে দিলে ডেলিভারি এক্সিকিউটিভকে আর অহেতুক আপনার দোরগোড়ায় আসতে হবে না।আপনি একবার ডেলিভারি নিতে অস্বীকার করলে, কুরিয়ার সার্ভিস থেকে অবিলম্বে এটি বিক্রেতার কাছে ফেরত পাঠানোর প্রক্রিয়া শুরু হবে। পণ্যটি তাদের কাছে পৌঁছানো মাত্রই আমাদের পক্ষ থেকে আপনার অর্ডারটি বাতিল করে দেওয়া হবে। এছাড়া, আপনার যদি এই একই পণ্য বা অন্য কোনো পণ্যের প্রয়োজন হয়, তবে আপনাকে একটি নতুন অর্ডার (Fresh Order) করার জন্য অনুরোধ করছি।<BR><BR>Call>Shipped>order_cancellation>Order_shipped_cant_cancel_COD"},
        3: { name: "Quality Issue", content: "STEP 1: Ask for unboxing video. STEP 2: Check fabric quality." },
        4: { name: "Late Delivery", content: "STEP 1: Call Logistics. STEP 2: Update customer on delay." }
        // The rest (5 to 200) will automatically become "SOP Module X"
    };

   // GENERATE 200 BUTTONS
    for (let i = 1; i <= 200; i++) {
        const button = document.createElement('button');
        button.className = 'sop-card-btn';
        const currentSop = sopDatabase[i] || { name: `SOP Module ${i}`, content: `Content for ${i}` };
        button.innerText = currentSop.name;

        button.onclick = () => {
            // Push state for back button support
            history.pushState({ view: 'sub' }, '', ''); 
            
            pageTitle.innerText = currentSop.name;
            pageBodyText.innerHTML = currentSop.content;
            mainPage.classList.add('hidden');
            subPage.classList.remove('hidden');
            window.scrollTo(0, 0);
        };
        grid.appendChild(button);
    }

    // SEARCH LOGIC
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.sop-card-btn').forEach(btn => {
            btn.style.display = btn.innerText.toLowerCase().includes(term) ? "flex" : "none";
        });
    });

    // BACK BUTTON LOGIC
    window.addEventListener('popstate', () => {
        subPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    newChatBtn.onclick = () => window.history.back();
});