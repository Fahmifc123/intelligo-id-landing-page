# Dynamic Content JSON Files

Folder ini berisi semua JSON files yang dapat di-update berkala tanpa perlu redeploy aplikasi.

## 📁 File Structure

```
src/data/
├── pricing.json              # Data pricing untuk semua kategori bootcamp
├── silabus.json             # Kurikulum dan materi untuk setiap program
├── testimonials.json        # Testimoni dan portfolio alumni
├── alumni-portfolio.json    # Showcase proyek alumni
├── alumni-logos.json        # Logo perusahaan tempat alumni bekerja
├── trainer-logos.json       # Logo perusahaan asal trainer/mentor
├── trainers.json            # Data trainer dan mentor Intelligo
├── faq.json                # Frequently Asked Questions
└── README.md               # Dokumentasi ini
```

---

## 📝 Cara Update Setiap File

### 1. **pricing.json** - Update Harga Paket
**Lokasi:** `src/data/pricing.json`

**Structure:**
```json
{
  "pricingCategories": [
    {
      "id": "online",
      "title": "Bootcamp Online",
      "plans": [
        {
          "name": "Bootcamp Malam - DS Beginner",
          "price": "Rp1.500.000",
          "paymentLink": "https://intelligo.myr.id/..."
        }
      ]
    }
  ]
}
```

**Update:**
- Ubah `price` untuk update harga
- Ubah `paymentLink` untuk update link pembayaran
- Tambah item baru dengan struktur yang sama

---

### 2. **silabus.json** - Update Kurikulum
**Lokasi:** `src/data/silabus.json`

**Structure:**
```json
{
  "curriculums": [
    {
      "id": "data-science-beginner",
      "title": "Data Science For Beginner",
      "modules": [
        {
          "week": 1,
          "title": "Pengenalan Python",
          "topics": ["Python Basics", "Environment Setup"]
        }
      ]
    }
  ]
}
```

**Update:**
- Ubah `title` dan `description` untuk update nama/deskripsi
- Tambah/hapus `modules` atau `topics` untuk update materi
- Setiap module bisa punya multiple topics

---

### 3. **testimonials.json** - Tambah Testimoni Alumni
**Lokasi:** `src/data/testimonials.json`

**Structure:**
```json
{
  "testimonials": [
    {
      "id": "testimonial-4",
      "name": "Nama Alumni",
      "role": "Job Title di Perusahaan",
      "batch": "Batch X - Program Name",
      "content": "Testimoni disini...",
      "photo": "https://image-url.jpg",
      "portfolio": {
        "title": "Project Title",
        "description": "Project description",
        "type": "pdf" atau "ppt",
        "slides": ["slide-url-1", "slide-url-2"]
      }
    }
  ]
}
```

**Update:**
- Tambah entry baru dengan increment `id`
- Update foto dengan URL yang valid
- Update portfolio details dengan proyek alumni

---

### 4. **alumni-portfolio.json** - Showcase Proyek Alumni
**Lokasi:** `src/data/alumni-portfolio.json`

**Structure:**
```json
{
  "alumniPortfolio": [
    {
      "id": "portfolio-5",
      "title": "Project Title",
      "category": "Data Science / ML / NLP / CV",
      "thumbnail": "https://...",
      "description": "Deskripsi proyek",
      "technologies": ["Python", "TensorFlow"],
      "author": "Nama Alumni",
      "batch": "Batch X",
      "viewCount": 1500,
      "link": "#"
    }
  ]
}
```

**Update:**
- Tambah proyek baru dengan `id` yang unique
- Set `category` sesuai tipe project
- Update `technologies` array dengan tech stack yang digunakan

---

### 5. **alumni-logos.json** - Logo Perusahaan Alumni
**Lokasi:** `src/data/alumni-logos.json`

**Structure:**
```json
{
  "alumniLogos": [
    {
      "id": "logo-9",
      "name": "Nama Perusahaan",
      "logo": "https://logo-url.png",
      "link": "https://perusahaan.com"
    }
  ]
}
```

**Update:**
- Tambah perusahaan baru dengan increment `id`
- Gunakan URL logo yang valid
- Set link ke website perusahaan

---

### 6. **trainer-logos.json** - Logo Perusahaan Trainer
**Lokasi:** `src/data/trainer-logos.json`

**Structure:**
```json
{
  "trainerLogos": [
    {
      "id": "trainer-logo-9",
      "name": "Nama Perusahaan",
      "logo": "https://logo-url.png",
      "link": "https://perusahaan.com"
    }
  ]
}
```

**Update:**
- Sama seperti alumni-logos.json
- Tambah logo perusahaan where trainer/mentor bekerja
- Increment `id` dengan prefix "trainer-logo-"

---

### 7. **trainers.json** - Data Trainer & Mentor
**Lokasi:** `src/data/trainers.json`

**Structure:**
```json
[
  {
    "name": "Nama Trainer",
    "role": "Job Title di Perusahaan | Role di Intelligo",
    "company": "Nama Perusahaan",
    "linkedin": "https://linkedin.com/in/username",
    "photoUrl": "/assets/trainers/photo.png"
  }
]
```

**Update:**
- Tambah trainer baru ke array
- Gunakan photo yang sudah di-upload di `/assets/trainers/`
- Set LinkedIn profile link
- Deskripsi role yang jelas

---

### 8. **faq.json** - Update FAQ
**Lokasi:** `src/data/faq.json`

**Structure:**
```json
{
  "faqItems": [
    {
      "id": "faq-11",
      "category": "General / Admission / Programs / Career / Support",
      "question": "Pertanyaan?",
      "answer": "Jawaban untuk pertanyaan tersebut..."
    }
  ]
}
```

**Update:**
- Tambah/edit pertanyaan yang sering diajukan
- Pilih category yang sesuai
- Buat answer yang jelas dan helpful

---

## ⚙️ File Update Workflow

### Step 1: Edit JSON File
1. Buka file yang ingin di-update
2. Edit data sesuai kebutuhan
3. Pastikan JSON syntax valid (gunakan [JSON Validator](https://jsonlint.com/))

### Step 2: Test Change
1. Save file
2. Aplikasi akan auto-reload (Vite hot reload)
3. Lihat perubahan di browser

### Step 3: Commit ke Git (Optional)
```bash
git add src/data/
git commit -m "Update: [deskripsi perubahan]"
```

---

## 🚨 Important Notes

1. **JSON Syntax**: Pastikan JSON format valid, terutama:
   - Semua string menggunakan double quotes `"`
   - Tidak ada trailing comma di akhir array/object
   - Proper escaping untuk special characters

2. **ID Uniqueness**: Setiap item harus punya `id` yang unique

3. **Image URLs**: Gunakan URLs yang valid dan accessible

4. **Categories**: Pilih kategori yang sesuai dari list yang sudah ada

---

## 🔗 Component Usage

Setiap JSON file sudah di-import di component yang sesuai:

| JSON File | Component | Location |
|-----------|-----------|----------|
| pricing.json | PricingSection | src/components/ |
| silabus.json | Silabus | src/pages/ |
| testimonials.json | TestimonialSection | src/components/ |
| alumni-portfolio.json | (akan di-update) | - |
| alumni-logos.json | AlumniLogosShowcase | src/components/ |
| trainer-logos.json | MentorSection | src/components/ |
| trainers.json | MentorSection | src/components/ |
| faq.json | FAQSection | src/components/ |

---

## 📞 Need Help?

Jika ada yang tidak jelas atau ada error, lihat:
- Browser console untuk error messages
- JSON Validator untuk syntax issues
- Component file untuk melihat format data yang diexpect

Happy updating! 🎉
