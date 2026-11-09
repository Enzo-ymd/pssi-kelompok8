window.PRESENTATION_CONTENT = {
  "meta": {
    "title": "Perencanaan dan Strategi Sistem Informasi",
    "subtitle": "Perbandingan FEAF, Zachman Framework, dan Critical Success Factor",
    "description": "Memahami pendekatan perencanaan sistem informasi melalui tiga studi kasus organisasi.",
    "group": "Kelompok 8",
    "lecturer": "Sugeng Wibowo, S.Kom., M.Kom.",
    "program": "Program Studi Sistem Informasi",
    "faculty": "Fakultas Sains dan Teknologi",
    "university": "Universitas Islam Negeri Sulthan Thaha Saifuddin Jambi",
    "year": "2026",
    "members": [
      {
        "name": "Ahmad Dzaky Naufal",
        "id": "701250153"
      },
      {
        "name": "Lulita Istiqomah",
        "id": "701250168"
      },
      {
        "name": "Kauli Sonika",
        "id": "701250145"
      },
      {
        "name": "Rima Fitriana",
        "id": "701250142"
      },
      {
        "name": "M. Iqbal",
        "id": "701250181"
      }
    ]
  },
  "sections": [
    {
      "id": "overview",
      "chapter": "Opening",
      "number": "00",
      "nav": "Overview",
      "title": "Perencanaan yang memberi arah pada teknologi",
      "eyebrow": "A STUDY IN INFORMATION SYSTEMS STRATEGY",
      "theme": "dark",
      "lead": "Teknologi informasi bukan sekadar perangkat yang digunakan organisasi. Ia perlu direncanakan agar proses, data, manusia, dan investasi bergerak menuju tujuan yang sama.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Makalah ini membandingkan tiga pendekatan perencanaan sistem informasi melalui tiga konteks organisasi: perancangan sistem Point of Sale pada Warung XYZ, sistem informasi pembelian supplier pada Agen Air Baraya Segar, serta strategi sistem informasi pemasaran Hotel XYZ Bandung."
        },
        {
          "type": "quote",
          "text": "Kerangka kerja yang tepat bukan yang paling rumit, melainkan yang paling sesuai dengan persoalan dan kapasitas organisasi."
        },
        {
          "type": "paragraph",
          "text": "FEAF, Zachman Framework, dan Critical Success Factor (CSF) bersama pendekatan Ward & Peppard memiliki titik tekan berbeda. Dengan memahami perbedaan tersebut, organisasi dapat menentukan pendekatan yang relevan—atau menyusun kombinasi yang perlu diuji lebih lanjut."
        }
      ]
    },
    {
      "id": "introduction",
      "chapter": "Chapter 01",
      "number": "01",
      "nav": "Introduction",
      "title": "Mengapa perencanaan SI/TI diperlukan?",
      "eyebrow": "THE CONTEXT",
      "theme": "light",
      "lead": "Aplikasi yang dibangun tanpa arsitektur dan prioritas yang jelas dapat menyelesaikan satu masalah, tetapi menciptakan masalah baru di bagian lain organisasi.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Pemanfaatan teknologi informasi telah menjadi kebutuhan hampir semua jenis organisasi, termasuk usaha kecil dan menengah. Namun, aplikasi yang dikembangkan secara parsial tanpa perencanaan arsitektur berisiko tidak selaras dengan kebutuhan jangka panjang. Dampaknya dapat berupa data yang tersebar, kerangkapan data, dan hilangnya keterkaitan antar-sumber daya informasi."
        },
        {
          "type": "paragraph",
          "text": "Ketika setiap unit menggunakan aplikasi atau pencatatan sendiri, organisasi dapat menghadapi proses bisnis yang tetap manual, informasi yang tidak terhubung, pelaporan yang lambat, serta kesalahan dalam pencatatan maupun penyusunan laporan. Masalah tersebut bukan semata-mata persoalan perangkat lunak; masalahnya juga menyangkut bagaimana proses dan informasi dirancang."
        },
        {
          "type": "paragraph",
          "text": "Perencanaan SI/TI membantu organisasi menghubungkan investasi teknologi dengan tujuan bisnis. Dengan perencanaan, organisasi dapat menentukan informasi apa yang dibutuhkan, proses mana yang perlu diperbaiki, aplikasi apa yang harus diprioritaskan, serta infrastruktur yang mendukungnya."
        },
        {
          "type": "subhead",
          "text": "Tiga konteks organisasi yang dikaji"
        },
        {
          "type": "case",
          "items": [
            [
              "FEAF",
              "POS pada Warung XYZ, Sukabumi",
              "Menyusun blueprint arsitektur dari kondisi saat ini menuju kondisi target."
            ],
            [
              "CSF + Ward & Peppard",
              "Sistem informasi pemasaran Hotel XYZ Bandung",
              "Menyelaraskan strategi bisnis, kebutuhan informasi, dan prioritas aplikasi."
            ],
            [
              "Zachman",
              "Sistem pembelian supplier Agen Air Baraya Segar",
              "Memetakan kebutuhan melalui perspektif dan pertanyaan arsitektur."
            ]
          ]
        }
      ]
    },
    {
      "id": "scope",
      "chapter": "Chapter 01",
      "number": "02",
      "nav": "Introduction",
      "title": "Rumusan masalah, tujuan, dan metode",
      "eyebrow": "RESEARCH FRAME",
      "theme": "light",
      "lead": "Kajian ini merupakan studi literatur komparatif. Kesimpulannya bergantung pada informasi yang dilaporkan oleh tiga artikel sumber, bukan pengumpulan data lapangan baru.",
      "blocks": [
        {
          "type": "subhead",
          "text": "Rumusan masalah"
        },
        {
          "type": "list",
          "items": [
            "Bagaimana FEAF, Zachman Framework, dan CSF diterapkan pada masing-masing studi kasus?",
            "Apa persamaan dan perbedaan ketiga pendekatan tersebut?",
            "Bagaimana memilih atau menggabungkan pendekatan sesuai karakteristik organisasi?"
          ]
        },
        {
          "type": "subhead",
          "text": "Tujuan penulisan"
        },
        {
          "type": "list",
          "items": [
            "Mendeskripsikan penerapan tiga kerangka kerja pada tiga studi kasus.",
            "Membandingkan ketiganya berdasarkan tujuan, struktur, tahapan, dan keluaran.",
            "Memberikan rekomendasi pemilihan kerangka kerja bagi organisasi skala kecil dan menengah."
          ]
        },
        {
          "type": "paragraph",
          "text": "Metode yang digunakan adalah studi literatur komparatif: membaca, meringkas, lalu membandingkan isi tiga artikel berdasarkan kriteria yang sama. Kajian dibatasi pada ketiga artikel tersebut dan tidak melakukan pengumpulan data lapangan baru. Oleh sebab itu, temuan yang dibahas merupakan temuan sebagaimana dilaporkan penulis artikel."
        }
      ]
    },
    {
      "id": "ea",
      "chapter": "Chapter 02",
      "number": "03",
      "nav": "Theoretical Foundation",
      "title": "Enterprise Architecture",
      "eyebrow": "THEORETICAL FOUNDATION",
      "theme": "light",
      "lead": "Enterprise Architecture (EA) adalah pendekatan terorganisir untuk menyelaraskan strategi teknologi informasi dengan tujuan bisnis.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "EA mencakup prinsip, metode, dan model yang menggambarkan hubungan antara struktur organisasi, proses bisnis, sistem informasi, dan infrastruktur teknologi. Hasilnya berupa cetak biru (blueprint) yang membantu organisasi memahami keterkaitan antarbagian dan merencanakan perubahan secara terarah."
        },
        {
          "type": "diagram",
          "title": "Empat domain arsitektur",
          "items": [
            [
              "01",
              "Business Architecture",
              "Struktur organisasi, tujuan, dan proses bisnis."
            ],
            [
              "02",
              "Data Architecture",
              "Data yang dibutuhkan, dikelola, dan dipertukarkan."
            ],
            [
              "03",
              "Application Architecture",
              "Aplikasi yang mendukung proses dan kebutuhan informasi."
            ],
            [
              "04",
              "Technology Architecture",
              "Infrastruktur dan teknologi untuk menjalankan aplikasi."
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Dengan gambaran yang terstruktur, EA dapat membantu mengurangi pengulangan fungsi sistem, menjaga konsistensi data, dan mendukung pengambilan keputusan. Keempat domain perlu dipahami sebagai bagian yang saling berhubungan, bukan sebagai komponen yang berdiri sendiri."
        }
      ]
    },
    {
      "id": "feaf-theory",
      "chapter": "Chapter 02",
      "number": "04",
      "nav": "Theoretical Foundation",
      "title": "Federal Enterprise Architecture Framework",
      "eyebrow": "FRAMEWORK 01 · FEAF",
      "theme": "dark",
      "lead": "FEAF membantu organisasi menyusun arsitektur dan memandu perpindahan dari kondisi saat ini (As-Is) menuju kondisi yang diharapkan (To-Be).",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Federal Enterprise Architecture Framework dikembangkan oleh pemerintah federal Amerika Serikat untuk menyediakan pendekatan baku dalam merencanakan, menerapkan, dan mengelola arsitektur sistem informasi di berbagai lembaga pemerintah. Tujuannya mencakup mendukung kerja sama antarunit, mengurangi duplikasi fungsi sistem, dan memberi arah bagi perubahan arsitektur."
        },
        {
          "type": "diagram",
          "title": "Domain arsitektur FEAF",
          "items": [
            [
              "01",
              "Business",
              "Kebutuhan dan proses organisasi."
            ],
            [
              "02",
              "Data",
              "Struktur serta aliran data."
            ],
            [
              "03",
              "Application",
              "Fungsi sistem dan layanan aplikasi."
            ],
            [
              "04",
              "Technology",
              "Platform, jaringan, dan infrastruktur."
            ]
          ]
        },
        {
          "type": "subhead",
          "text": "Empat komponen dalam penelitian Warung XYZ"
        },
        {
          "type": "flow",
          "items": [
            "Current Architecture",
            "Model Architecture",
            "Standards",
            "Target Architecture"
          ],
          "captions": [
            "Kondisi yang sedang berjalan",
            "Model kebutuhan dan rancangan",
            "Standar teknologi dan tata kelola",
            "Kondisi arsitektur yang dituju"
          ]
        },
        {
          "type": "paragraph",
          "text": "Empat komponen tersebut merupakan susunan hasil perancangan yang digunakan dalam artikel Warung XYZ. Komponen ini tidak boleh disamakan begitu saja dengan empat domain arsitektur bisnis, data, aplikasi, dan teknologi."
        }
      ]
    },
    {
      "id": "zachman-theory",
      "chapter": "Chapter 02",
      "number": "05",
      "nav": "Theoretical Foundation",
      "title": "Zachman Framework",
      "eyebrow": "FRAMEWORK 02 · ZACHMAN",
      "theme": "light",
      "lead": "Zachman adalah kerangka kerja arsitektur enterprise berbentuk matriks yang memetakan kebutuhan melalui enam perspektif dan enam pertanyaan dasar.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Baris matriks mewakili perspektif pemangku kepentingan, sedangkan kolom mewakili pertanyaan yang membantu menguraikan enterprise. Setiap sel mendokumentasikan aspek tertentu dari kebutuhan dan rancangan sistem. Dalam penelitian yang dikaji, perspektifnya bergerak dari perencanaan hingga enterprise yang berfungsi."
        },
        {
          "type": "matrix"
        },
        {
          "type": "paragraph",
          "text": "Enam kolomnya adalah What (data), How (proses), Where (lokasi), Who (orang), When (waktu), dan Why (motivasi). Enam perspektifnya adalah Planner, Owner, Designer, Builder, Detailed Representation, dan Functioning Enterprise. Matriks membantu memastikan bahwa kebutuhan tidak hanya dilihat dari satu sudut pandang."
        }
      ]
    },
    {
      "id": "csf-theory",
      "chapter": "Chapter 02",
      "number": "06",
      "nav": "Theoretical Foundation",
      "title": "Perencanaan SI/TI, Ward & Peppard, dan CSF",
      "eyebrow": "FRAMEWORK 03 · STRATEGIC ALIGNMENT",
      "theme": "light",
      "lead": "Perencanaan strategis SI/TI mengidentifikasi portofolio aplikasi yang mendukung rencana bisnis dan tujuan organisasi.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Pendekatan Ward & Peppard menggunakan alat analisis untuk memahami lingkungan bisnis dan SI/TI, antara lain SWOT beserta IFAS dan EFAS, Value Chain, Critical Success Factor, serta portofolio aplikasi model McFarlan. Analisis ini membantu organisasi melihat kondisi internal dan eksternal sebelum menentukan arah strategi."
        },
        {
          "type": "subhead",
          "text": "Proses Critical Success Factor"
        },
        {
          "type": "flow",
          "items": [
            "Visi, misi & tujuan",
            "Critical Success Factors",
            "Kebutuhan informasi",
            "Strategi SI/TI"
          ],
          "captions": [
            "Menetapkan arah organisasi",
            "Menentukan faktor yang wajib berhasil",
            "Menerjemahkan faktor menjadi informasi",
            "Menghubungkan kebutuhan dengan prioritas sistem"
          ]
        },
        {
          "type": "paragraph",
          "text": "CSF merupakan metode untuk menentukan faktor-faktor kritis yang harus berhasil dicapai agar tujuan organisasi terwujud. Prosesnya dimulai dari penentuan visi, misi, dan tujuan; dilanjutkan dengan penentuan CSF; kemudian CSF dijabarkan menjadi kebutuhan informasi. Dengan demikian, CSF menjembatani strategi bisnis dengan strategi sistem informasi."
        },
        {
          "type": "list",
          "items": [
            "SWOT: memahami kekuatan, kelemahan, peluang, dan ancaman.",
            "IFAS dan EFAS: menyusun faktor strategis internal dan eksternal.",
            "Value Chain: memahami aktivitas utama dan pendukung organisasi.",
            "McFarlan Strategic Grid: mengelompokkan portofolio aplikasi berdasarkan peran strategisnya."
          ]
        }
      ]
    },
    {
      "id": "warung-background",
      "chapter": "Chapter 03",
      "number": "07",
      "nav": "FEAF",
      "title": "Warung XYZ — latar belakang dan metode",
      "eyebrow": "CASE STUDY 01 · FEAF",
      "theme": "dark",
      "lead": "Warung XYZ di Cibolang Kaler, Sukabumi, menghadapi persoalan operasional yang berakar pada pencatatan manual dan belum terintegrasinya informasi penjualan serta stok.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Penjualan masih dicatat secara manual di buku dan total transaksi dihitung menggunakan kalkulator. Warung belum memiliki pencatatan stok yang terintegrasi. Akibatnya, penyusunan laporan harian dan bulanan membutuhkan waktu lebih lama serta rentan mengalami kesalahan."
        },
        {
          "type": "subhead",
          "text": "Metode penelitian"
        },
        {
          "type": "paragraph",
          "text": "Penelitian menggunakan pendekatan kualitatif deskriptif melalui observasi, wawancara dengan pemilik dan kasir, serta studi literatur. Tahapan perancangan dimulai dari identifikasi kondisi As-Is, analisis kebutuhan dan arsitektur bisnis, perancangan arsitektur data, aplikasi, dan teknologi, kemudian penyusunan blueprint To-Be."
        },
        {
          "type": "flow",
          "items": [
            "Identifikasi As-Is",
            "Analisis kebutuhan",
            "Rancang domain arsitektur",
            "Blueprint To-Be"
          ],
          "captions": [
            "Memahami proses berjalan",
            "Menentukan kebutuhan bisnis",
            "Data, aplikasi, teknologi",
            "Menyatukan rancangan target"
          ]
        }
      ]
    },
    {
      "id": "warung-implementation",
      "chapter": "Chapter 03",
      "number": "08",
      "nav": "FEAF",
      "title": "Implementasi FEAF dan hasil rancangan",
      "eyebrow": "CASE STUDY 01 · ARCHITECTURE BLUEPRINT",
      "theme": "light",
      "lead": "Empat komponen FEAF pada studi kasus ini menyusun gambaran dari proses manual hingga rancangan POS yang diusulkan.",
      "blocks": [
        {
          "type": "subhead",
          "text": "01 — Current Architecture"
        },
        {
          "type": "paragraph",
          "text": "Kondisi awal menggunakan buku catatan dan kalkulator. Belum terdapat aplikasi yang mendukung pencatatan penjualan dan stok, serta belum tersedia jaringan internet untuk sistem tersebut."
        },
        {
          "type": "subhead",
          "text": "02 — Model Architecture"
        },
        {
          "type": "paragraph",
          "text": "Model melibatkan dua aktor, yaitu Admin/Pemilik dan Kasir. Fungsi yang dirancang mencakup login, pengelolaan produk, pengelolaan pengguna, transaksi penjualan, pencetakan struk, dan laporan penjualan. Data dimodelkan dalam empat tabel: produk, transaksi, detail transaksi, dan pengguna."
        },
        {
          "type": "diagram",
          "title": "Model sistem POS yang diusulkan",
          "items": [
            [
              "ACTOR 01",
              "Admin / Pemilik",
              "Mengelola produk dan pengguna serta melihat laporan."
            ],
            [
              "ACTOR 02",
              "Kasir",
              "Melakukan transaksi penjualan dan mencetak struk."
            ],
            [
              "DATA 01",
              "Produk & Pengguna",
              "Menyimpan data master produk dan akun pengguna."
            ],
            [
              "DATA 02",
              "Transaksi & Detail",
              "Mencatat transaksi beserta rincian item penjualan."
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Arsitektur teknologi yang dirancang terdiri dari klien web atau mobile, server aplikasi, server basis data, dan koneksi internet."
        },
        {
          "type": "subhead",
          "text": "03 — Standards"
        },
        {
          "type": "list",
          "items": [
            "Perangkat: laptop atau smartphone.",
            "Sistem operasi: Windows atau Android.",
            "Basis data: MySQL.",
            "Web server: Apache (XAMPP).",
            "Aplikasi berbasis web dengan hak akses berdasarkan peran.",
            "Backup secara rutin dan penggunaan HTTPS."
          ]
        },
        {
          "type": "subhead",
          "text": "04 — Target Architecture"
        },
        {
          "type": "paragraph",
          "text": "Target architecture dijelaskan melalui diagram aktivitas untuk login, transaksi penjualan, pengelolaan produk, laporan penjualan, dan pengelolaan pengguna. Hasil akhirnya berupa blueprint satu halaman yang merangkum empat domain arsitektur."
        }
      ]
    },
    {
      "id": "warung-evaluation",
      "chapter": "Chapter 03",
      "number": "09",
      "nav": "FEAF",
      "title": "Temuan dan evaluasi FEAF",
      "eyebrow": "CASE STUDY 01 · EVALUATION",
      "theme": "light",
      "lead": "FEAF dinilai dapat diadaptasi untuk UMKM dengan menyesuaikan cakupan dan kompleksitas rancangan.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Blueprint yang dihasilkan dapat menjadi pedoman bagi pemilik usaha untuk memahami kondisi saat ini dan target sistem, sekaligus menjadi acuan implementasi POS secara bertahap. Struktur empat domain membantu menyatukan proses bisnis, data, aplikasi, dan teknologi dalam satu gambaran."
        },
        {
          "type": "subhead",
          "text": "Keterbatasan yang perlu diperhatikan"
        },
        {
          "type": "list",
          "items": [
            "Penjelasan jalur transisi dari As-Is menuju To-Be masih terbatas.",
            "Pengukuran keberhasilan sistem belum dijelaskan secara memadai.",
            "Klaim peningkatan kecepatan transaksi belum divalidasi menggunakan data pengukuran."
          ]
        },
        {
          "type": "note",
          "text": "Pembedaan penting: rancangan dan manfaat yang diharapkan bukan bukti bahwa peningkatan kinerja telah terjadi. Artikel menyajikan blueprint; dampak operasional tetap perlu diuji setelah implementasi."
        }
      ]
    },
    {
      "id": "hotel-background",
      "chapter": "Chapter 04",
      "number": "10",
      "nav": "CSF",
      "title": "Hotel XYZ Bandung — konteks dan analisis",
      "eyebrow": "CASE STUDY 02 · CSF + WARD & PEPPARD",
      "theme": "dark",
      "lead": "Hotel XYZ merupakan hotel bintang empat di Bandung yang berdiri sejak 1995. Tantangan utamanya adalah pemanfaatan SI/TI yang belum optimal dan integrasi sistem yang belum menyeluruh.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Sistem yang belum terintegrasi menyebabkan data tersebar dan berpotensi mengalami duplikasi, termasuk pada departemen pemasaran. Kondisi tersebut menyulitkan pemanfaatan informasi untuk mendukung kegiatan pemasaran dan pengambilan keputusan."
        },
        {
          "type": "subhead",
          "text": "Lingkungan bisnis dan SI/TI"
        },
        {
          "type": "paragraph",
          "text": "Analisis mencakup lingkungan bisnis internal dan eksternal melalui SWOT dengan perhitungan IFAS dan EFAS, Value Chain, serta analisis SI/TI internal. Pemeriksaan internal SI/TI memperhatikan perangkat keras yang digunakan setiap divisi dan perangkat lunak yang telah tersedia."
        },
        {
          "type": "subhead",
          "text": "Tren teknologi yang dipertimbangkan"
        },
        {
          "type": "list",
          "items": [
            "Progressive Web Apps (PWA)",
            "AI Chatbot",
            "Accelerated Mobile Pages (AMP)",
            "Beacon",
            "5G",
            "Cloud Computing"
          ]
        },
        {
          "type": "paragraph",
          "text": "Hasil analisis diterjemahkan menjadi visi dan misi, strategi bisnis, Critical Success Factors, ukuran keberhasilan, serta kebutuhan informasi. Balanced Scorecard dan Key Performance Indicators (KPI) digunakan dalam pemetaan ukuran keberhasilan."
        }
      ]
    },
    {
      "id": "hotel-results",
      "chapter": "Chapter 04",
      "number": "11",
      "nav": "CSF",
      "title": "Strategi, portofolio aplikasi, dan roadmap hotel",
      "eyebrow": "CASE STUDY 02 · STRATEGIC RESULTS",
      "theme": "light",
      "lead": "CSF dan Ward & Peppard menghubungkan arah bisnis hotel dengan kebutuhan informasi dan prioritas pengembangan aplikasi.",
      "blocks": [
        {
          "type": "subhead",
          "text": "Strategi bisnis yang diusulkan"
        },
        {
          "type": "list",
          "items": [
            "Memperluas kerja sama dengan mitra melalui kontrak berjangka lebih dari satu tahun.",
            "Memperluas kegiatan promosi.",
            "Meningkatkan pelayanan pelanggan.",
            "Menyediakan informasi wisata."
          ]
        },
        {
          "type": "paragraph",
          "text": "Strategi tersebut difasilitasi melalui SI Kemitraan. Artikel juga mengusulkan strategi SI/TI berupa pengembangan sistem informasi yang terintegrasi dan portofolio aplikasi berdasarkan model McFarlan."
        },
        {
          "type": "grid"
        },
        {
          "type": "paragraph",
          "text": "Dalam klasifikasi yang secara eksplisit disebutkan, basis data dan SI Hotel berada pada kuadran Strategic. SI Kemitraan dan APEL berada pada kuadran High Potential. Artikel tidak memberikan penempatan eksplisit untuk aplikasi lain pada uraian yang menjadi dasar kajian ini; karena itu, kuadran lainnya tidak diisi dengan contoh rekaan."
        },
        {
          "type": "paragraph",
          "text": "Penelitian menyusun roadmap pengembangan aplikasi selama tiga tahun untuk menentukan urutan pengembangan. Saran penelitian selanjutnya meliputi analisis Grand Strategy, analisis efisiensi dan produktivitas, serta penggunaan DeLone dan McLean Information Systems Success Model untuk mengukur keberhasilan sistem."
        },
        {
          "type": "note",
          "text": "Kekuatan pendekatan ini adalah penyelarasan strategi bisnis dan investasi SI/TI. Namun, dampak setelah implementasi belum diukur dalam kajian yang dirangkum."
        }
      ]
    },
    {
      "id": "supplier-background",
      "chapter": "Chapter 05",
      "number": "12",
      "nav": "Zachman",
      "title": "Agen Air Baraya Segar — konteks pembelian",
      "eyebrow": "CASE STUDY 03 · ZACHMAN",
      "theme": "dark",
      "lead": "Proses pemesanan melalui WhatsApp, keterbatasan pemantauan stok supplier, dan arsip faktur kertas menjadi persoalan utama pada proses pembelian.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Agen Air Baraya Segar melakukan pemesanan barang kepada supplier melalui chat WhatsApp. Pemesanan dapat terlambat, sementara ketersediaan stok supplier tidak dapat dipantau dengan baik. Ketika stok tidak diketahui, pesanan berisiko gagal. Riwayat transaksi juga tersimpan dalam faktur kertas yang menumpuk."
        },
        {
          "type": "paragraph",
          "text": "Penelitian menggunakan observasi, wawancara, dan studi literatur. Permasalahan serta kebutuhan organisasi kemudian dipetakan ke dalam matriks Zachman, dengan menguraikan setiap baris perspektif dan kolom pertanyaan."
        },
        {
          "type": "quote",
          "text": "Tujuan rancangan adalah membuat proses pembelian dan informasi supplier lebih terstruktur, bukan sekadar memindahkan formulir kertas ke layar."
        }
      ]
    },
    {
      "id": "supplier-implementation",
      "chapter": "Chapter 05",
      "number": "13",
      "nav": "Zachman",
      "title": "Pemetaan Zachman pada sistem pembelian",
      "eyebrow": "CASE STUDY 03 · SIX PERSPECTIVES",
      "theme": "light",
      "lead": "Pemetaan bergerak dari ruang lingkup organisasi hingga detail rancangan dan cara sistem digunakan oleh para pelaku.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Planner menetapkan ruang lingkup berupa data registrasi, barang, pembayaran, riwayat transaksi, dan supplier. Aktornya adalah owner, pegawai toko, dan pegawai supplier. Lokasi organisasi berada di ruko Pasar Cicurug, dengan visi “selalu tersedia dan dibutuhkan”."
        },
        {
          "type": "paragraph",
          "text": "Pada perspektif Owner, entitas bisnis mencakup supplier, pegawai toko, pegawai supplier, barang supplier, pembayaran, dan kendaraan pengiriman. Perspektif ini juga memuat flowchart pembelian untuk menggambarkan alur kegiatan bisnis."
        },
        {
          "type": "paragraph",
          "text": "Designer memuat ERD dan Data Flow Diagram (DFD), termasuk proses pembayaran, laporan transaksi, pembaruan data barang, serta rancangan jaringan internet. Builder menjabarkan model data fisik, kamus data, dan teknologi yang dicatat dalam artikel: PHP, HTML, CSS, MySQL, dan Apache."
        },
        {
          "type": "note",
          "text": "PHP, HTML, CSS, MySQL, dan Apache merupakan teknologi yang dilaporkan dalam artikel studi kasus Zachman. Penyebutannya tidak mengubah ketentuan teknis website presentasi ini yang tetap menggunakan HTML, CSS, dan JavaScript statis."
        },
        {
          "type": "paragraph",
          "text": "Detailed Representation dan Functioning Enterprise memuat rancangan tabel rinci, hak akses pengguna, daftar pengguna, jadwal perancangan selama empat bulan, dan SOP penggunaan sistem. Owner dapat melihat laporan, pegawai toko mengelola pembelian, sedangkan pegawai supplier mengelola order."
        },
        {
          "type": "matrix"
        }
      ]
    },
    {
      "id": "supplier-evaluation",
      "chapter": "Chapter 05",
      "number": "14",
      "nav": "Zachman",
      "title": "Hasil dan evaluasi Zachman",
      "eyebrow": "CASE STUDY 03 · EVALUATION",
      "theme": "light",
      "lead": "Zachman memetakan data, proses, lokasi, pelaku, waktu, dan motivasi secara menyeluruh hingga rancangan yang dekat dengan operasional.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Solusi yang diharapkan mencakup pemantauan stok supplier, riwayat transaksi yang terkomputerisasi, dan pengelolaan pembelian yang lebih terstruktur. Dengan informasi stok yang lebih mudah dipantau, organisasi diharapkan dapat mengurangi risiko keterlambatan atau kegagalan pemesanan."
        },
        {
          "type": "paragraph",
          "text": "Artikel memiliki ketidakkonsistenan pada beberapa bagian. Perspektif Detailed Representation menyebut sistem penerimaan siswa baru dan pembayaran SPP, sedangkan kata kunci merujuk pada sekolah menengah kejuruan, padahal objek yang dibahas adalah pembelian barang supplier."
        },
        {
          "type": "note",
          "text": "Ketidaksesuaian objek dan istilah tersebut penting dalam evaluasi sumber akademik. Pembaca perlu memeriksa konsistensi isi artikel sebelum menjadikan rincian yang tidak relevan sebagai dasar rancangan atau kesimpulan."
        }
      ]
    },
    {
      "id": "comparison",
      "chapter": "Chapter 06",
      "number": "15",
      "nav": "Comparative Analysis",
      "title": "Perbandingan tiga pendekatan",
      "eyebrow": "COMPARATIVE ANALYSIS",
      "theme": "dark",
      "lead": "Ketiga pendekatan sama-sama berangkat dari pemahaman organisasi, tetapi menghasilkan keluaran dengan fokus dan tingkat kedekatan implementasi yang berbeda.",
      "blocks": [
        {
          "type": "comparison"
        },
        {
          "type": "note",
          "text": "Penilaian “kedekatan dengan implementasi” dan “fokus pada strategi bisnis” merupakan penilaian penulis makalah berdasarkan isi tiga artikel, bukan klaim langsung dari masing-masing artikel jurnal."
        }
      ]
    },
    {
      "id": "similarities",
      "chapter": "Chapter 06",
      "number": "16",
      "nav": "Comparative Analysis",
      "title": "Persamaan dan perbedaan",
      "eyebrow": "COMPARATIVE ANALYSIS",
      "theme": "light",
      "lead": "Persamaan ketiganya terletak pada upaya memahami kondisi organisasi dan menghasilkan rancangan terdokumentasi. Perbedaannya terletak pada apa yang paling diprioritaskan.",
      "blocks": [
        {
          "type": "subhead",
          "text": "Persamaan"
        },
        {
          "type": "list",
          "items": [
            "Semua pendekatan dimulai dengan pemahaman kondisi organisasi melalui observasi, wawancara, atau analisis internal.",
            "Ketiganya menghasilkan rancangan yang terdokumentasi.",
            "Ketiganya membahas persoalan proses manual atau sistem yang belum terintegrasi.",
            "Ketiganya menyoroti pengelolaan informasi dan data yang belum optimal."
          ]
        },
        {
          "type": "subhead",
          "text": "Perbedaan fokus"
        },
        {
          "type": "paragraph",
          "text": "FEAF menyusun arsitektur berdasarkan domain dan membandingkan kondisi saat ini dengan target, sehingga kuat untuk memberikan gambaran menyeluruh. Zachman menguraikan kebutuhan dari berbagai perspektif pemangku kepentingan; pendekatan ini lebih rinci, tetapi dokumentasinya dapat menjadi panjang dan beberapa sel terasa berulang bagi organisasi kecil."
        },
        {
          "type": "paragraph",
          "text": "CSF dan Ward & Peppard paling kuat dalam menghubungkan strategi bisnis dengan keputusan investasi SI. Namun, pendekatan tersebut tidak secara langsung menghasilkan rancangan basis data atau desain teknis aplikasi yang rinci."
        }
      ]
    },
    {
      "id": "advantages",
      "chapter": "Chapter 06",
      "number": "17",
      "nav": "Comparative Analysis",
      "title": "Kelebihan dan keterbatasan",
      "eyebrow": "CRITICAL REVIEW",
      "theme": "light",
      "lead": "Tidak ada pendekatan yang unggul dalam semua aspek. Kegunaan masing-masing bergantung pada masalah organisasi, sumber daya, dan keluaran yang dibutuhkan.",
      "blocks": [
        {
          "type": "evaluation",
          "items": [
            [
              "FEAF",
              "Struktur jelas; blueprint mudah dipahami pengembang maupun pemilik usaha.",
              "Penjelasan transisi As-Is ke To-Be dan ukuran keberhasilan masih terbatas; klaim peningkatan kecepatan transaksi belum diuji dengan data pengukuran."
            ],
            [
              "Zachman",
              "Perspektif pemangku kepentingan komprehensif; dokumentasi rinci dan dekat dengan implementasi.",
              "Dokumentasi dapat kompleks dan panjang; artikel mengandung ketidakkonsistenan istilah terkait sistem sekolah."
            ],
            [
              "CSF + Ward & Peppard",
              "Keselarasan strategi bisnis dan SI kuat; prioritas aplikasi disusun melalui roadmap.",
              "Analisis panjang dan menuntut keterlibatan manajemen; kurang praktis untuk usaha mikro; dampak pascaimplementasi belum diukur."
            ]
          ]
        }
      ]
    },
    {
      "id": "recommendations",
      "chapter": "Chapter 07",
      "number": "18",
      "nav": "Recommendations",
      "title": "Memilih pendekatan yang tepat",
      "eyebrow": "RECOMMENDATIONS",
      "theme": "dark",
      "lead": "Pemilihan kerangka kerja sebaiknya dimulai dari kebutuhan organisasi, bukan dari popularitas atau kompleksitas sebuah framework.",
      "blocks": [
        {
          "type": "recommend",
          "items": [
            [
              "Organisasi mikro dan kecil",
              "Gunakan FEAF versi ringkas atau Zachman dengan jumlah sel yang disederhanakan ketika masalah operasional sudah jelas, misalnya pencatatan penjualan manual."
            ],
            [
              "Organisasi dengan banyak divisi",
              "Mulai dari CSF dan Ward & Peppard untuk menentukan aplikasi strategis, kemudian turunkan prioritas tersebut ke arsitektur data, aplikasi, dan teknologi."
            ],
            [
              "Kombinasi bertahap",
              "CSF menetapkan prioritas; FEAF menyusun blueprint As-Is dan To-Be; Zachman merinci kebutuhan aplikasi prioritas."
            ]
          ]
        },
        {
          "type": "flow",
          "items": [
            "CSF",
            "FEAF",
            "Zachman"
          ],
          "captions": [
            "Menetapkan prioritas strategis",
            "Menyusun blueprint arsitektur",
            "Merinci kebutuhan dan rancangan"
          ]
        },
        {
          "type": "note",
          "text": "Urutan CSF → FEAF → Zachman merupakan sintesis yang diusulkan penulis makalah berdasarkan tiga artikel. Kombinasi ini belum diuji pada satu studi kasus nyata, sehingga belum dapat dianggap sebagai metode yang tervalidasi."
        }
      ]
    },
    {
      "id": "measurement",
      "chapter": "Chapter 07",
      "number": "19",
      "nav": "Recommendations",
      "title": "Mengukur keberhasilan implementasi",
      "eyebrow": "EVALUATION FRAMEWORK",
      "theme": "light",
      "lead": "Blueprint dan strategi merupakan hasil perencanaan. Manfaat sistem baru dapat dibuktikan melalui pengukuran sebelum dan sesudah implementasi.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Organisasi perlu menetapkan indikator sejak awal agar perubahan dapat dievaluasi secara objektif. Tiga indikator yang disarankan dalam makalah adalah waktu pelayanan, tingkat kesalahan pencatatan, dan ketepatan laporan."
        },
        {
          "type": "metrics",
          "items": [
            [
              "01",
              "Waktu pelayanan",
              "Apakah transaksi atau proses pembelian menjadi lebih cepat?"
            ],
            [
              "02",
              "Tingkat kesalahan pencatatan",
              "Apakah kesalahan input, duplikasi, atau kehilangan catatan berkurang?"
            ],
            [
              "03",
              "Ketepatan laporan",
              "Apakah laporan lebih cepat disusun dan konsisten dengan transaksi sebenarnya?"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Pengukuran perlu dilakukan dengan definisi indikator dan cara pencatatan yang jelas sebelum sistem diterapkan, kemudian diulang setelah implementasi. Tanpa pembanding tersebut, organisasi hanya dapat menyampaikan manfaat yang diharapkan, bukan dampak yang telah dibuktikan."
        }
      ]
    },
    {
      "id": "conclusion",
      "chapter": "Chapter 08",
      "number": "20",
      "nav": "Conclusion",
      "title": "Kesimpulan utama",
      "eyebrow": "CONCLUSION",
      "theme": "dark",
      "lead": "FEAF, Zachman, dan CSF + Ward & Peppard saling melengkapi. Ketiganya tidak dapat dipertukarkan begitu saja karena masing-masing menjawab kebutuhan yang berbeda.",
      "blocks": [
        {
          "type": "numbered",
          "items": [
            "FEAF pada kasus POS Warung XYZ menghasilkan blueprint arsitektur empat domain yang membantu pemilik memahami kondisi saat ini dan target sistem.",
            "Zachman Framework pada kasus pembelian barang supplier memetakan kebutuhan dari berbagai perspektif hingga skema basis data, hak akses, dan SOP.",
            "CSF dengan Ward & Peppard pada Hotel XYZ menerjemahkan visi dan misi menjadi strategi bisnis, kebutuhan informasi, portofolio aplikasi, dan roadmap tiga tahun.",
            "Ketiganya tidak saling menggantikan: FEAF unggul pada gambaran arsitektur, Zachman pada kerincian kebutuhan, dan CSF pada keselarasan strategi."
          ]
        },
        {
          "type": "quote",
          "text": "FEAF memberi gambaran arsitektur. Zachman merinci kebutuhan. CSF menjaga agar investasi SI/TI tetap berangkat dari strategi bisnis."
        }
      ]
    },
    {
      "id": "suggestions",
      "chapter": "Chapter 08",
      "number": "21",
      "nav": "Conclusion",
      "title": "Saran dan arah penelitian berikutnya",
      "eyebrow": "FURTHER WORK",
      "theme": "light",
      "lead": "Penelitian lanjutan perlu bergerak dari rancangan menuju pengujian, pengukuran, dan validasi penerapan kombinasi pendekatan.",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Penelitian selanjutnya sebaiknya menguji sistem hasil rancangan dan mengukur dampaknya menggunakan indikator yang jelas.",
            "Kombinasi CSF, FEAF, dan Zachman dapat dicoba pada satu studi kasus untuk menguji urutan yang diusulkan pada bagian rekomendasi.",
            "Pembaca dan peneliti yang menggunakan artikel sumber perlu memeriksa konsistensi isinya, terutama kesesuaian objek penelitian dan kemungkinan adanya sisa teks dari penelitian lain."
          ]
        },
        {
          "type": "paragraph",
          "text": "Saran tersebut menegaskan pentingnya validasi empiris. Perencanaan arsitektur dan strategi menyediakan arah, sedangkan pengujian implementasi menunjukkan apakah rancangan benar-benar menyelesaikan masalah organisasi."
        }
      ]
    },
    {
      "id": "references",
      "chapter": "Chapter 09",
      "number": "22",
      "nav": "References",
      "title": "Daftar referensi",
      "eyebrow": "ACADEMIC SOURCES",
      "theme": "light",
      "lead": "Tiga artikel berikut merupakan sumber utama yang digunakan dalam studi literatur komparatif.",
      "blocks": [
        {
          "type": "references"
        }
      ]
    }
  ],
  "zachmanColumns": [
    [
      "What",
      "Data"
    ],
    [
      "How",
      "Process"
    ],
    [
      "Where",
      "Location"
    ],
    [
      "Who",
      "People"
    ],
    [
      "When",
      "Time"
    ],
    [
      "Why",
      "Motivation"
    ]
  ],
  "zachmanRows": [
    "Planner",
    "Owner",
    "Designer",
    "Builder",
    "Detailed Representation",
    "Functioning Enterprise"
  ],
  "zachmanDetails": [
    [
      "Ruang lingkup data registrasi, barang, pembayaran, riwayat transaksi, dan supplier.",
      "Gambaran proses pembelian secara umum.",
      "Lokasi organisasi di ruko Pasar Cicurug.",
      "Owner, pegawai toko, dan pegawai supplier.",
      "Konteks waktu dan cakupan perencanaan organisasi.",
      "Visi organisasi: “selalu tersedia dan dibutuhkan”. "
    ],
    [
      "Entitas supplier, pegawai toko, pegawai supplier, barang supplier, pembayaran, kendaraan pengiriman.",
      "Flowchart proses pembelian.",
      "Lokasi aktivitas bisnis dan hubungan dengan supplier.",
      "Peran pelaku dalam kegiatan pembelian.",
      "Urutan aktivitas pembelian.",
      "Tujuan aktivitas bisnis dan kebutuhan ketersediaan barang."
    ],
    [
      "ERD untuk menggambarkan hubungan data.",
      "DFD untuk aliran proses pembayaran, laporan transaksi, dan pembaruan barang.",
      "Rancangan jaringan internet.",
      "Perancangan interaksi antar-pengguna dan sistem.",
      "Alur proses dan laporan transaksi.",
      "Aturan serta kebutuhan yang mendasari rancangan."
    ],
    [
      "Model data fisik dan kamus data.",
      "Implementasi proses ke dalam komponen aplikasi.",
      "Infrastruktur jaringan dan server yang dirancang.",
      "Komponen aplikasi untuk peran pengguna.",
      "Urutan pembangunan sistem.",
      "Teknologi yang digunakan: PHP, HTML, CSS, MySQL, dan Apache."
    ],
    [
      "Rincian tabel basis data.",
      "Detail rancangan fungsi dan proses.",
      "Detail lokasi/infrastruktur sistem.",
      "Hak akses dan daftar pengguna.",
      "Jadwal perancangan selama empat bulan.",
      "Rincian aturan serta kebutuhan sistem."
    ],
    [
      "Data operasional yang dikelola sistem.",
      "SOP dan proses penggunaan sistem.",
      "Sistem digunakan pada lingkungan operasional agen.",
      "Owner melihat laporan; pegawai toko mengelola pembelian; pegawai supplier mengelola order.",
      "Jadwal dan penggunaan sistem dalam operasi.",
      "Tujuan operasional: mendukung pembelian dan ketersediaan barang."
    ]
  ],
  "references": [
    "Kurniasih, S., Putri, S. M., & Muhtarudin. (2025). Rencana Strategi Sistem Informasi Pemasaran Menggunakan Critical Success Factor pada Departemen Pemasaran di Hotel XYZ Bandung. Jurnal Teknologi Informasi (LOGIN), 4(2), 1–8. https://jurnal.lpkia.ac.id/index.php/jti/index",
    "Nurul R A, M. R., Gandi, F. R., Rahayu, D. S., & Sihabudin. (2026). Implementasi Zachman Framework dalam Perancangan Sistem Informasi Manajemen Pembelian Barang Supplier. Jurnal Rekayasa Teknologi Nusa Putra, 12(1), 64–71. https://rekayasa.nusaputra.ac.id/index",
    "Syilfa, M., Saepudin, S., & Jatmiko, W. (2026). Perancangan Enterprise Architecture Sistem Point of Sale UMKM Menggunakan Model Federal Enterprise Architecture Framework. SISMATIK (Seminar Nasional Sistem Informasi dan Manajemen Informatika), Universitas Nusa Putra, 252–264."
  ],
  "comparison": [
    [
      "Fokus utama",
      "Cetak biru arsitektur As-Is ke To-Be",
      "Pemodelan kebutuhan lintas perspektif",
      "Strategi SI/TI dan prioritas aplikasi"
    ],
    [
      "Struktur",
      "Empat domain: bisnis, data, aplikasi, teknologi",
      "Matriks 6 perspektif × 6 pertanyaan",
      "Alur visi, strategi, CSF, kebutuhan informasi"
    ],
    [
      "Alat analisis",
      "Use case, ERD, diagram aktivitas, diagram jaringan",
      "Flowchart, ERD, DFD, kamus data, jaringan",
      "SWOT, IFAS/EFAS, Value Chain, McFarlan, Balanced Scorecard"
    ],
    [
      "Keluaran",
      "Blueprint EA dan standar teknologi",
      "Rancangan dari planner sampai fungsi operasional",
      "Portofolio aplikasi dan roadmap tiga tahun"
    ],
    [
      "Skala organisasi",
      "Usaha mikro (satu warung)",
      "Usaha kecil (agen air)",
      "Organisasi menengah-besar (hotel bintang empat)"
    ],
    [
      "Kedekatan implementasi",
      "Sedang",
      "Tinggi",
      "Rendah sampai sedang"
    ],
    [
      "Fokus strategi bisnis",
      "Sedang",
      "Rendah sampai sedang (visi dan misi pada kolom Why)",
      "Tinggi"
    ]
  ]
};


// ======================================================
// COMPACT PRESENTATION PATCH — 15 SLIDES
// Tambahkan setelah deklarasi PRESENTATION_CONTENT
// ======================================================

(() => {
  const original = window.PRESENTATION_CONTENT;
  const source = original.sections;

  const get = (id) => source.find(section => section.id === id);

  const blocks = (id, indexes) => {
    const section = get(id);
    return indexes.map(index => section.blocks[index]).filter(Boolean);
  };

  const makeSlide = (id, number, nav, title, eyebrow, theme, lead, content) => ({
    id,
    chapter: `Slide ${number}`,
    number: String(number).padStart(2, "0"),
    nav,
    title,
    eyebrow,
    theme,
    lead,
    blocks: content
  });

  const overview = get("overview");
  const references = get("references");

  const compactSections = [

    // 01 — COVER
    overview,

    // 02 — PENDAHULUAN DAN METODE
    makeSlide(
      "introduction",
      1,
      "Introduction",
      "Mengapa perencanaan SI/TI diperlukan?",
      "INTRODUCTION & RESEARCH FRAME",
      "light",
      "Perencanaan SI/TI menghubungkan kebutuhan organisasi dengan proses, informasi, dan investasi teknologi yang tepat.",
      [
        ...blocks("introduction", [0, 2, 3, 4]),
        ...blocks("scope", [0, 1, 2, 3, 4])
      ]
    ),

    // 03 — ENTERPRISE ARCHITECTURE
    makeSlide(
      "ea",
      2,
      "Foundation",
      "Enterprise Architecture",
      "THEORETICAL FOUNDATION",
      "light",
      "Enterprise Architecture menyelaraskan strategi bisnis, proses, data, aplikasi, dan teknologi dalam satu cetak biru organisasi.",
      blocks("ea", [0, 1, 2])
    ),

    // 04 — FEAF THEORY
    makeSlide(
      "feaf-theory",
      3,
      "FEAF",
      "FEAF — Kerangka arsitektur enterprise",
      "FRAMEWORK 01 · FEAF",
      "dark",
      "FEAF membantu organisasi memahami arsitektur saat ini dan merancang kondisi target secara terstruktur.",
      [
        ...blocks("feaf-theory", [0, 1, 2, 3]),
        ...blocks("warung-background", [0, 2, 3])
      ]
    ),

    // 05 — FEAF CASE STUDY
    makeSlide(
      "warung-case",
      4,
      "FEAF",
      "Studi kasus FEAF — Warung XYZ",
      "CASE STUDY 01 · WARUNG XYZ",
      "light",
      "Blueprint POS dirancang untuk mengatasi pencatatan manual, pengelolaan stok yang belum terintegrasi, dan keterlambatan laporan.",
      [
        ...blocks("warung-implementation", [0, 1, 2, 3, 4, 5, 6]),
        ...blocks("warung-evaluation", [1, 2])
      ]
    ),

    // 06 — ZACHMAN THEORY
    makeSlide(
      "zachman-theory",
      5,
      "Zachman",
      "Zachman Framework",
      "FRAMEWORK 02 · ZACHMAN",
      "light",
      "Matriks Zachman memetakan kebutuhan enterprise melalui enam perspektif dan enam pertanyaan dasar.",
      [
        ...blocks("zachman-theory", [0, 1, 2]),
        ...blocks("supplier-background", [0, 1])
      ]
    ),

    // 07 — ZACHMAN CASE STUDY
    makeSlide(
      "supplier-case",
      6,
      "Zachman",
      "Studi kasus Zachman — Agen Air Baraya Segar",
      "CASE STUDY 02 · SUPPLIER MANAGEMENT",
      "light",
      "Pemetaan Zachman membantu merinci sistem pembelian supplier dari ruang lingkup organisasi hingga rancangan operasional.",
      [
        ...blocks("supplier-implementation", [0, 1, 2, 3, 4, 5]),
        ...blocks("supplier-evaluation", [0, 1, 2])
      ]
    ),

    // 08 — CSF THEORY
    makeSlide(
      "csf-theory",
      7,
      "CSF",
      "CSF dan pendekatan Ward & Peppard",
      "FRAMEWORK 03 · STRATEGIC ALIGNMENT",
      "light",
      "Pendekatan ini menghubungkan visi dan tujuan organisasi dengan faktor keberhasilan, kebutuhan informasi, serta strategi SI/TI.",
      [
        ...blocks("csf-theory", [0, 1, 2, 3]),
        ...blocks("hotel-background", [0, 1, 2, 4])
      ]
    ),

    // 09 — HOTEL CASE STUDY
    makeSlide(
      "hotel-case",
      8,
      "CSF",
      "Studi kasus CSF — Hotel XYZ Bandung",
      "CASE STUDY 03 · HOTEL XYZ",
      "light",
      "Perencanaan strategi SI/TI hotel berfokus pada integrasi informasi, penguatan pemasaran, dan prioritas pengembangan aplikasi.",
      blocks("hotel-results", [0, 1, 2, 3, 4, 5])
    ),

    // 10 — COMPARISON
    makeSlide(
      "comparison",
      9,
      "Comparison",
      "Perbandingan tiga pendekatan",
      "COMPARATIVE ANALYSIS",
      "dark",
      "FEAF, Zachman, dan CSF memiliki tujuan yang saling berkaitan, tetapi berbeda dalam fokus, struktur, dan keluaran.",
      [
        ...blocks("comparison", [0, 1]),
        ...blocks("similarities", [0, 1, 2, 3, 4])
      ]
    ),

    // 11 — STRENGTHS AND LIMITATIONS
    makeSlide(
      "advantages",
      10,
      "Evaluation",
      "Kelebihan dan keterbatasan",
      "CRITICAL REVIEW",
      "light",
      "Tidak ada pendekatan yang unggul dalam semua aspek. Pemilihannya bergantung pada kebutuhan dan kapasitas organisasi.",
      blocks("advantages", [0])
    ),

    // 12 — RECOMMENDATIONS AND MEASUREMENT
    makeSlide(
      "recommendations",
      11,
      "Recommendations",
      "Rekomendasi dan pengukuran keberhasilan",
      "STRATEGIC RECOMMENDATIONS",
      "dark",
      "Pendekatan perlu dipilih berdasarkan masalah organisasi dan keberhasilannya harus dibuktikan melalui indikator terukur.",
      [
        ...blocks("recommendations", [0, 1, 2]),
        ...blocks("measurement", [0, 1, 2])
      ]
    ),

    // 13 — CONCLUSION
    makeSlide(
      "conclusion",
      12,
      "Conclusion",
      "Kesimpulan dan saran",
      "CONCLUSION",
      "dark",
      "Ketiga pendekatan dapat saling melengkapi, tetapi penerapan kombinasinya tetap perlu diuji pada organisasi nyata.",
      [
        ...blocks("conclusion", [0, 1]),
        ...blocks("suggestions", [0, 1])
      ]
    ),

    // 14 — RESERVED FOR ACADEMIC CLOSING
    makeSlide(
      "closing",
      13,
      "Closing",
      "Arah pengembangan selanjutnya",
      "FINAL REFLECTION",
      "light",
      "Perencanaan yang baik tidak berhenti pada blueprint. Organisasi perlu menguji implementasi, mengukur hasil, dan memperbaiki sistem secara berkelanjutan.",
      [
        {
          type: "quote",
          text: "Strategi menentukan arah. Arsitektur menyusun struktur. Evaluasi membuktikan manfaat."
        },
        {
          type: "paragraph",
          text: "Kajian ini terbatas pada tiga artikel sumber dan belum menguji kombinasi FEAF, Zachman, dan CSF pada satu organisasi. Pengujian lanjutan diperlukan untuk memvalidasi rekomendasi yang diajukan."
        }
      ]
    ),

    // 15 — REFERENCES
    references
  ];

  // Update nomor slide secara konsisten
  compactSections.forEach((section, index) => {
    section.number = String(index).padStart(2, "0");
  });

  original.sections = compactSections;

  console.info(
    `Presentation compacted: ${compactSections.length} slides`
  );
})();
