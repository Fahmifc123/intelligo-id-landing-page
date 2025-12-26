#!/usr/bin/env python3
"""
Download alumni photos from Google Drive
"""
import os
import requests
from pathlib import Path

# Create output directory
output_dir = Path("public/assets/foto-alumni")
output_dir.mkdir(parents=True, exist_ok=True)

# Alumni data with Google Drive IDs and desired filenames
alumni_photos = {
    "zaki-maulana.jpg": "1Hf2QJfXthhn4RbDWDMssNnYAwWq65pw-",
    "muhammad-vito.jpg": "1Q3K4AbOUk2JUFZfDK4A50roatDUEU0ab",
    "fahmi-hammam.jpg": "1Fv---Ffmfh3UuuQPRiAXXHMH1tWPgwRD",
    "rangga-pratama.jpg": "1_6YlHmLaduHNzweRP8yxpBVf83IT6Ioa",
    "sufa-ammar.jpg": "1QUf2_nKVhUzzuIo7i_QR49VlM0jpff4G",
    "aryandhita-kinanti.jpg": "1pHuMpU-2_RwJaP9PKQFLBeMZv3rW6bxq",
    "sonya-oktavia.jpg": "1LPyO9gxND73b2tD0NxRFrkGbshByJOrd",
    "bayu-nusman.jpg": "1hRvFehQI6YUW5h8kOH4qxYO12ekKUHtS",
    "ardiana-abdul-gumelar.jpg": "1_Lbx6P7Zug9BfGw8alUZtp2UjorM1y_V",
    "tyas-ayu-kartikadewi.jpg": "1IAYp-iy1MseaPajOrNQI0_NRhFMCaHna",
    "dimas-muhammad-akbar.jpg": "1jNUvcuFQ4C2hnvwC58rBZau3vT0baaKG",
    "raihan-fatahillah.jpg": "1hVHEaHxVVOYolTpn7VUefJnyHNbpLvKQ",
    "akmal-falah-darmawan.jpg": "1K0dnH3Zq6b8udvyKIwgkWLW8KZwCzo38",
    "yohanes-lengkong.jpg": "1BnadmnolofDqy7v8yIsmXrii3jLmJtd-",
    "hansen-christian-suwito.jpg": "19ejj71pUY0tZUQSpooytgqkGghF5ttgQ",
    "naufal-daffa-zayyan.jpg": "1kvU9lX6VEG9tqTlQmQSQrR84wJltV1dF",
    "randra-ferdian-saputra.jpg": "1tCmoT3lU8wQP12dRqLKQ1z1def6iYaxj",
    "mahanani-hadi-wibowo.jpg": "1dGsT6l08DkCtn5ZVClAkrLKd03OlC6JD",
    "elsa-sofiari.jpg": "18t8GY0vyd3ECpKkgk1m0s_XyF64cMqUz",
    "mitchell-karindo.jpg": "1sOt2ayDtXB55Bhw6wV6nVMvh2V2EyXFa",
    "genoveva-yashinta-desideria.jpg": "10Ziw_cStshaX-4_xAfvCkl5i_-k9zsIz",
    "l-m-aznur-syahfajar.jpg": "1in3l3vfewjTPFjlnDjuPtkuROfcAiVIn",
    "najmi-zulfan.jpg": "1-Sap6t_4FBVQnEfQkJytzBjmRjm4oI6L",
    "deryalfi-fathudin.jpg": "1ZGDmrHn3kxki18IORSRHsXFqIledTJHM",
    "vivi-putri-yanti-simanjuntak.jpg": "1J3lemVKDHoTmP293ee9nsUntssrGv1KK",
    "delfiero-akbar-iskandar.jpg": "1hGNKJhXGOoIuQEigzxmeKCtZU-RC3LI5",
    "bennedict-marvello-sheen.jpg": "1LoDjjKx68KSpbk9ghLwP3SUTjxX0VMgP",
}

def download_photo(filename, drive_id):
    """Download photo from Google Drive"""
    url = f"https://drive.google.com/uc?id={drive_id}&export=download"
    filepath = output_dir / filename
    
    try:
        print(f"Downloading {filename}...", end=" ")
        response = requests.get(url, timeout=30)
        
        if response.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(response.content)
            print(f"✓ ({len(response.content) / 1024:.1f} KB)")
            return True
        else:
            print(f"✗ (Status: {response.status_code})")
            return False
    except Exception as e:
        print(f"✗ ({str(e)})")
        return False

def main():
    print(f"Downloading alumni photos to {output_dir}/\n")
    
    success_count = 0
    for filename, drive_id in alumni_photos.items():
        if download_photo(filename, drive_id):
            success_count += 1
    
    print(f"\n✓ Downloaded {success_count}/{len(alumni_photos)} photos")
    print(f"Photos saved to: {output_dir.resolve()}")

if __name__ == "__main__":
    main()
