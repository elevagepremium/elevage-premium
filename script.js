/*=========================================
        ÉLEVAGE PREMIUM - SCRIPT FINAL
=========================================*/

// Dictionnaire multilingue complet
const translations = {
    fr: {
        pageTitle: "Élevage Premium",
        nav_home: "Accueil",
        nav_services: "Services",
        nav_accompagnement: "Accompagnement",
        nav_contact: "Contact",
        hero_title: "ÉLEVAGE PREMIUM",
        hero_subtitle: "La révolution de l'élevage au Maroc",
        hero_desc: "Des solutions scientifiques et pratiques inspirées des meilleures exploitations du Maroc et du monde. Nous accompagnons les éleveurs dans l'alimentation, la reproduction, la génétique et la santé animale afin d'obtenir une production maximale avec un minimum de dépenses.",
        hero_btn: "Demander un accompagnement",
        pres_title: "Notre Vision",
        pres_desc: "Chez Élevage Premium, nous croyons en un élevage moderne, rentable et durable. Grâce à une expertise de pointe et des méthodes adaptées au contexte marocain, nous aidons chaque éleveur à optimiser ses performances zootechniques et économiques.",
        spec_title: "Espèces Concernées",
        spec_equide: "Équidés",
        serv_title: "Nos Domaines d'Expertise",
        serv_1_title: "Conduite Technique",
        serv_1_desc: "Maîtrise globale des itinéraires techniques de l'exploitation pour une rentabilité optimale.",
        serv_2_title: "Alimentation & Nutrition",
        serv_2_desc: "Formulation de rations équilibrées pour maximiser la production laitière et l'engraissement.",
        serv_3_title: "Génétique & Reproduction",
        serv_3_desc: "Amélioration du cheptel par le choix rigoureux des souches et le suivi de la reproduction.",
        serv_4_title: "Santé & Biosécurité",
        serv_4_desc: "Protocoles préventifs et gestion sanitaire pour réduire la mortalité et les dépenses vétérinaires.",
        form_title: "Demander un Accompagnement",
        form_subtitle: "Remplissez le formulaire ci-dessous pour bénéficier de conseils personnalisés adaptés à votre exploitation.",
        opt_select_service: "Sélectionnez le service désiré",
        serv_opt_1: "Conduite alimentaire",
        serv_opt_2: "Amélioration génétique",
        serv_opt_3: "Cas pathologique",
        serv_opt_4: "Conduite technique globale",
        opt_select_espece: "Sélectionnez l'espèce principale",
        opt_bovin: "Bovin",
        opt_ovin: "Ovin",
        opt_caprin: "Caprin",
        opt_equide: "Équidé",
        inputNom: "Votre Nom complet",
        inputTel: "Numéro de Téléphone",
        inputVille: "Ville / Région au Maroc",
        inputMsg: "Décrivez votre projet ou vos difficultés actuelles...",
        form_btn: "Envoyer la demande",
        contact_title: "Contactez-nous",
        contact_phone: "Téléphone :",
        contact_email: "Email :",
        contact_address: "Adresse :",
        success_msg: "Votre demande a bien été recueillie, nous vous contacterons le plus tôt possible."
    },
    ar: {
        pageTitle: "التربية الممتازة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_accompagnement: "المواكبة",
        nav_contact: "اتصل بنا",
        hero_title: "التربية الممتازة",
        hero_subtitle: "ثورة تربية الماشية في المغرب",
        hero_desc: "حلول علمية وعملية مستوحاة من أفضل الضيعات في المغرب والعالم. نواكب المربين في التغذية، التكاثر، الوراثة وصحة الحيوان لتحقيق أقصى إنتاج بأقل مصاريف.",
        hero_btn: "اطلب مواكبة",
        pres_title: "رؤيتنا",
        pres_desc: "في التربية الممتازة، نؤمن بتربية حديثة مربحة ومستدامة. بفضل الخبرة العالية والأساليب الملائمة للسياق المغربي، نساعد كل مربي على تحسين أدائه التقني والاقتصادي.",
        spec_title: "الأنواع المعنية",
        spec_equide: "الخيول والدواب",
        serv_title: "مجالات خبرتنا",
        serv_1_title: "التسيير التقني",
        serv_1_desc: "التحكم الشامل في المسارات التقنية للضيعة لتحقيق مردودية مثلى.",
        serv_2_title: "التغذية والتخزين",
        serv_2_desc: "صياغة حصص متوازنة لتحقيق أقصى إنتاج للحليب والتسمين.",
        serv_3_title: "الوراثة والتكاثر",
        serv_3_desc: "تحسين القطيع من خلال الاختيار الدقيق للسلالات وتتبع التكاثر.",
        serv_4_title: "الصحة والأمن البيولوجي",
        serv_4_desc: "بروتوكولات وقائية وتدبير صحي لتقليل الوفيات والمصاريف البيطرية.",
        form_title: "اطلب مواكبة تقنية",
        form_subtitle: "املأ النموذج أسفله للاستفادة من استشارات شخصية تناسب ضيعتك.",
        opt_select_service: "اختر الخدمة المطلوبة",
        serv_opt_1: "التربية والتغذية",
        serv_opt_2: "التحسين الوراثي",
        serv_opt_3: "حالة مرضية",
        serv_opt_4: "التسيير التقني الشامل",
        opt_select_espece: "اختر النوع الرئيسي",
        opt_bovin: "أبقار",
        opt_ovin: "أغنام",
        opt_caprin: "ماعز",
        opt_equide: "خيول",
        inputNom: "اسمك الكامل",
        inputTel: "رقم الهاتف",
        inputVille: "المدينة / المنطقة بالمغرب",
        inputMsg: "صف مشروعك أو الصعوبات الحالية...",
        form_btn: "إرسال الطلب",
        contact_title: "اتصل بنا",
        contact_phone: "الهاتف:",
        contact_email: "البريد الإلكتروني:",
        contact_address: "العنوان:",
        success_msg: "تم تلقي طلبكم بنجاح، سنتواصل معكم في أقرب وقت ممكن."
    },
    en: {
        pageTitle: "Premium Breeding",
        nav_home: "Home",
        nav_services: "Services",
        nav_accompagnement: "Support",
        nav_contact: "Contact",
        hero_title: "PREMIUM BREEDING",
        hero_subtitle: "The livestock revolution in Morocco",
        hero_desc: "Scientific and practical solutions inspired by the best farms in Morocco and worldwide. We support breeders in nutrition, reproduction, genetics, and animal health to achieve maximum production with minimal expense.",
        hero_btn: "Request Support",
        pres_title: "Our Vision",
        pres_desc: "At Premium Breeding, we believe in modern, profitable, and sustainable farming. Thanks to cutting-edge expertise and methods tailored to the Moroccan context, we help every breeder optimize technical and economic performance.",
        spec_title: "Targeted Species",
        spec_equide: "Equines",
        serv_title: "Our Fields of Expertise",
        serv_1_title: "Technical Management",
        serv_1_desc: "Complete mastery of farm technical pathways for optimal profitability.",
        serv_2_title: "Feeding & Nutrition",
        serv_2_desc: "Balanced ration formulation to maximize milk production and fattening.",
        serv_3_title: "Genetics & Reproduction",
        serv_3_desc: "Herd improvement through rigorous strain selection and reproduction tracking.",
        serv_4_title: "Health & Biosécurity",
        serv_4_desc: "Preventive protocols and health management to reduce mortality and veterinary costs.",
        form_title: "Request Support",
        form_subtitle: "Fill out the form below to benefit from personalized advice tailored to your farm.",
        opt_select_service: "Select desired service",
        serv_opt_1: "Feeding management",
        serv_opt_2: "Genetic improvement",
        serv_opt_3: "Pathological case",
        serv_opt_4: "Global technical management",
        opt_select_espece: "Select main species",
        opt_bovin: "Cattle",
        opt_ovin: "Sheep",
        opt_caprin: "Goats",
        opt_equide: "Equines",
        inputNom: "Full Name",
        inputTel: "Phone Number",
        inputVille: "City / Region in Morocco",
        inputMsg: "Describe your project or current challenges...",
        form_btn: "Send Request",
        contact_title: "Contact Us",
        contact_phone: "Phone:",
        contact_email: "Email:",
        contact_address: "Address:",
        success_msg: "Your request has been successfully received, we will contact you as soon as possible."
    }
};

let currentLang = 'fr';

function changeLanguage(lang) {
    currentLang = lang;
    const html = document.getElementById("htmlTag");
    
    if (lang === 'ar') {
        html.setAttribute("dir", "rtl");
        html.setAttribute("lang", "ar");
    } else {
        html.setAttribute("dir", "ltr");
        html.setAttribute("lang", lang);
    }

    // Traduction des textes statiques
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Traduction des placeholders du formulaire
    document.getElementById("inputNom").placeholder = translations[lang]["inputNom"];
    document.getElementById("inputTel").placeholder = translations[lang]["inputTel"];
    document.getElementById("inputVille").placeholder = translations[lang]["inputVille"];
    document.getElementById("inputMsg").placeholder = translations[lang]["inputMsg"];

    // Actualiser le select dynamique si une espèce est déjà sélectionnée
    const especeSelect = document.getElementById("espece");
    if (especeSelect && especeSelect.value) {
        especeSelect.dispatchEvent(new Event('change'));
    }
}

document.addEventListener("DOMContentLoaded", function () {

    // Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Intersection Observer pour les animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up");
            }
        });
    });
    sections.forEach(section => observer.observe(section));

    // Formulaire Intelligent Ultra-Détaillé avec les choix demandés
    const espece = document.getElementById("espece");
    const categorieContainer = document.getElementById("categorieContainer");

    if (espece) {
        espece.addEventListener("change", function () {
            let html = "";
            const l = currentLang;

            switch (this.value) {
                case "bovin":
                    html = `
                    <label class="form-label fw-bold mt-2">${l === 'ar' ? 'الإنتاج / الهدف' : l === 'en' ? 'Production / Goal' : 'Production / Objectif'}</label>
                    <select id="prodBovin" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر نوع الإنتاج' : l === 'en' ? 'Choose production type' : 'Choisissez la production'}</option>
                        <option value="laitiere">${l === 'ar' ? 'إنتاج الحليب' : l === 'en' ? 'Dairy production' : 'Production laitière'}</option>
                        <option value="engraissement">${l === 'ar' ? 'التسمين' : l === 'en' ? 'Fattening' : 'Engraissement'}</option>
                    </select>
                    
                    <label class="form-label fw-bold">${l === 'ar' ? 'الفئة' : l === 'en' ? 'Category' : 'Catégorie'}</label>
                    <select name="categorie_Detaillee" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر الفئة' : l === 'en' ? 'Choose category' : 'Choisissez la catégorie'}</option>
                        <option value="males">${l === 'ar' ? 'ذكور' : l === 'en' ? 'Males' : 'Mâles'}</option>
                        <option value="genisses">${l === 'ar' ? 'عجلات' : l === 'en' ? 'Heifers' : 'Génisses'}</option>
                        <option value="veaux_lait">${l === 'ar' ? 'عجول الرضيع' : l === 'en' ? 'Milk calves' : 'Veaux de lait'}</option>
                        <option value="vaches_laitieres">${l === 'ar' ? 'أبقار حلوب' : l === 'en' ? 'Dairy cows' : 'Vaches laitières'}</option>
                        <option value="vaches_taries">${l === 'ar' ? 'أبقار جافة' : l === 'en' ? 'Dry cows' : 'Vaches taries'}</option>
                        <option value="vaches_preparation">${l === 'ar' ? 'أبقار في مرحلة التحضير' : l === 'en' ? 'Cows in preparation' : 'Vaches en préparation'}</option>
                    </select>
                    `;
                    break;

                case "ovin":
                    html = `
                    <label class="form-label fw-bold mt-2">${l === 'ar' ? 'الهدف' : l === 'en' ? 'Objective' : 'Objectif'}</label>
                    <select id="prodOvin" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر الهدف' : l === 'en' ? 'Choose objective' : "Choisissez l'objectif"}</option>
                        <option value="production">${l === 'ar' ? 'الإنتاج' : l === 'en' ? 'Production' : 'Production'}</option>
                        <option value="engraissement">${l === 'ar' ? 'التسمين' : l === 'en' ? 'Fattening' : 'Engraissement'}</option>
                    </select>

                    <label class="form-label fw-bold">${l === 'ar' ? 'الفئة' : l === 'en' ? 'Category' : 'Catégorie'}</label>
                    <select name="categorie_Detaillee" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر الفئة' : l === 'en' ? 'Choose category' : 'Choisissez la catégorie'}</option>
                        <option value="antenais_aid">${l === 'ar' ? 'خرفان عيد الأضحى' : l === 'en' ? 'Eid al-Adha lambs' : "Antenais de l'Aïd al-Adha"}</option>
                        <option value="croisement_terminal">${l === 'ar' ? 'التهجين الطرفي' : l === 'en' ? 'Terminal crossing' : 'Croisement terminal'}</option>
                        <option value="brebis_lutte">${l === 'ar' ? 'نعاج في التزاوج' : l === 'en' ? 'Ewes in breeding' : 'Brebis en lutte'}</option>
                        <option value="brebis_gestation">${l === 'ar' ? 'نعاج عشار' : l === 'en' ? 'Pregnant ewes' : 'Brebis en gestation'}</option>
                        <option value="brebis_lactation">${l === 'ar' ? 'نعاج حلوب (مرضعة)' : l === 'en' ? 'Lactating ewes' : 'Brebis en lactation'}</option>
                        <option value="antenaises_croissance">${l === 'ar' ? 'إناث في مرحلة النمو' : l === 'en' ? 'Growing ewe lambs' : 'Antenaises en croissance'}</option>
                    </select>
                    `;
                    break;

                case "caprin":
                    html = `
                    <label class="form-label fw-bold mt-2">${l === 'ar' ? 'الإنتاج' : l === 'en' ? 'Production' : 'Production'}</label>
                    <select id="prodCaprin" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر نوع الإنتاج' : l === 'en' ? 'Choose production type' : 'Choisissez la production'}</option>
                        <option value="lait">${l === 'ar' ? 'إنتاج الحليب' : l === 'en' ? 'Milk production' : 'Production de lait'}</option>
                        <option value="viande">${l === 'ar' ? 'اللحوم' : l === 'en' ? 'Meat' : 'Viande'}</option>
                    </select>

                    <label class="form-label fw-bold">${l === 'ar' ? 'الفئة' : l === 'en' ? 'Category' : 'Catégorie'}</label>
                    <select name="categorie_Detaillee" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر الفئة' : l === 'en' ? 'Choose category' : 'Choisissez la catégorie'}</option>
                        <option value="chevre_laitiere">${l === 'ar' ? 'ماعز حلوب' : l === 'en' ? 'Dairy goat' : 'Chèvre laitière'}</option>
                        <option value="chevrette_croissance">${l === 'ar' ? 'عنزة صغيرة في النمو' : l === 'en' ? 'Growing doe' : 'Chevrette en croissance'}</option>
                        <option value="chevraux_engrais">${l === 'ar' ? 'جداء للتسمين' : l === 'en' ? 'Fattening kids' : "Chevraux à l'engrais"}</option>
                    </select>
                    `;
                    break;

                case "equide":
                    html = `
                    <label class="form-label fw-bold mt-2">${l === 'ar' ? 'الجنس' : l === 'en' ? 'Gender' : 'Sexe'}</label>
                    <select id="sexeEquide" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر الجنس' : l === 'en' ? 'Choose gender' : 'Choisissez le sexe'}</option>
                        <option value="male">${l === 'ar' ? 'ذكر' : l === 'en' ? 'Male' : 'Mâle'}</option>
                        <option value="jument">${l === 'ar' ? 'أفراس (أنثى)' : l === 'en' ? 'Mare' : 'Jument'}</option>
                    </select>

                    <label class="form-label fw-bold">${l === 'ar' ? 'النشاط / الفئة' : l === 'en' ? 'Activity / Category' : 'Discipline / Catégorie'}</label>
                    <select name="categorie_Detaillee" id="disciplineEquide" class="form-select mb-3" required>
                        <option value="">${l === 'ar' ? 'اختر أولا الجنس' : l === 'en' ? 'Choose gender first' : "Veuillez d'abord choisir le sexe"}</option>
                    </select>

                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" name="croissance_poulain" value="oui" id="poulainCheck">
                        <label class="form-check-label" for="poulainCheck">
                            ${l === 'ar' ? 'متابعة نمو المهر (الفلو)' : l === 'en' ? 'Foal growth monitoring' : "Suivi de croissance du poulain"}
                        </label>
                    </div>
                    `;
                    break;

                default:
                    html = "";
            }

            categorieContainer.innerHTML = html;

            if (this.value === "equide") {
                const sexeSelect = document.getElementById("sexeEquide");
                const discSelect = document.getElementById("disciplineEquide");

                sexeSelect.addEventListener("change", function () {
                    let opts = "";
                    if (this.value === "male") {
                        opts = `
                        <option value="tbourida">Tbourida</option>
                        <option value="saut_obstacles">${l === 'ar' ? 'القفز على الحواجز' : l === 'en' ? 'Show jumping' : "Saut d'obstacles"}</option>
                        <option value="course">${l === 'ar' ? 'سباق الخيل' : l === 'en' ? 'Racing' : 'Course'}</option>
                        <option value="loisirs">${l === 'ar' ? 'ترفيه' : l === 'en' ? 'Leisure' : 'Loisirs'}</option>
                        `;
                    } else if (this.value === "jument") {
                        opts = `
                        <option value="lactation">${l === 'ar' ? 'مرحلة الإرضاع' : l === 'en' ? 'Lactation' : 'Lactation'}</option>
                        <option value="gestation">${l === 'ar' ? 'مرحلة الحمل' : l === 'en' ? 'Gestation' : 'Gestation'}</option>
                        <option value="saut_obstacles">${l === 'ar' ? 'القفز على الحواجز' : l === 'en' ? 'Show jumping' : "Saut d'obstacles"}</option>
                        <option value="course">${l === 'ar' ? 'سباق الخيل' : l === 'en' ? 'Racing' : 'Course'}</option>
                        <option value="loisirs">${l === 'ar' ? 'ترفيه' : l === 'en' ? 'Leisure' : 'Loisirs'}</option>
                        `;
                    } else {
                        opts = `<option value="">${l === 'ar' ? 'اختر الجنس أولا' : l === 'en' ? 'Select gender first' : "Veuillez d'abord choisir le sexe"}</option>`;
                    }
                    discSelect.innerHTML = opts;
                });
            }
        });
    }

    // Gestion de la soumission du formulaire avec message de validation multilingue
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(translations[currentLang]["success_msg"]);
                    contactForm.reset();
                    categorieContainer.innerHTML = "";
                } else {
                    alert("Erreur lors de l'envoi, veuillez réessayer.");
                }
            })
            .catch(() => {
                alert("Une erreur est survenue.");
            });
        });
    }

});