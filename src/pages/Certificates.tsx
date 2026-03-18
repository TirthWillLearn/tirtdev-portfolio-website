import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-primary">Certificates</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Verified certifications from industry, government, and academic
                institutions.
              </p>
            </div>

            {/* Industry Certificates */}
            <div className="mb-14">
              <h2 className="text-xl font-semibold mb-6 border-b border-border pb-2">
                🎓 Industry Certificates
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Introduction to Back-End Development",
                    img: "https://i.postimg.cc/8z6MPQbf/Coursera-8-YQBAJ8-XPGK7.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/8YQBAJ8XPGK7",
                    org: "Meta (Coursera)",
                  },
                  {
                    title: "Programming with JavaScript",
                    img: "https://i.postimg.cc/Vk55Z512/Coursera-N5-AWEC7-RQQMP.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/N5AWEC7RQQMP",
                    org: "Meta (Coursera)",
                  },
                  {
                    title: "Introduction to Git and GitHub",
                    img: "https://i.postimg.cc/NFfrgDqj/Coursera-6-CZYDWCXY4-DN.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/6CZYDWCXY4DN",
                    org: "Google (Coursera)",
                  },
                  {
                    title: "Version Control",
                    img: "https://i.postimg.cc/h4mtNTrN/Coursera-J4-G3-LRFN6-HS4.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/J4G3LRFN6HS4",
                    org: "Meta (Coursera)",
                  },
                  {
                    title: "Introduction to Front-End Development",
                    img: "https://i.postimg.cc/FRBhPw0j/Coursera-KZJH9-T9-W25-VJ.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/KZJH9T9W25VJ",
                    org: "Meta (Coursera)",
                  },
                  {
                    title: "HTML and CSS in Depth",
                    img: "https://i.postimg.cc/Bbhdv37y/Coursera-AAFSCEP36-CRT.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/AAFSCEP36CRT",
                    org: "Meta (Coursera)",
                  },
                  {
                    title: "React Basics",
                    img: "https://i.postimg.cc/DZHP2yqm/Coursera-KYUWB6-VB8-NW3.png",
                    link: "https://www.coursera.org/account/accomplishments/verify/KYUWB6VB8NW3",
                    org: "Meta (Coursera)",
                  },
                ].map((cert, i) => (
                  <Card
                    key={i}
                    className="bg-card-gradient border border-border p-4 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-44 object-cover object-top rounded-md mb-3"
                    />
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.org}
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Government Certificates */}
            <div className="mb-14">
              <h2 className="text-xl font-semibold mb-6 border-b border-border pb-2">
                🏛️ Government Certifications
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Python Programming",
                    org: "MBTB – July 2023",
                    link: "https://drive.google.com/file/d/1E9imZLF2Yq2PFRmgJQFt5CDVMRnpLSgG/view",
                  },
                  {
                    title: "C++ Programming",
                    org: "MBTB – March 2024",
                    link: "https://drive.google.com/file/d/1Fmk_hy5ymdnYVmGhaNhalmo1_KpfMb5w/view",
                  },
                  {
                    title: "Java (Core) Programming",
                    org: "MBTB – March 2024",
                    link: "https://drive.google.com/file/d/1NGwegDuFVc3TV4RyDdOwASjY1VDFFGAg/view",
                  },
                ].map((cert, i) => (
                  <Card
                    key={i}
                    className="border border-border p-4 shadow-sm flex flex-col"
                  >
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.org}
                    </p>
                    <div className="mt-auto">
                      <Button size="sm" variant="outline" asChild>
                        <a href={cert.link} target="_blank">
                          View
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Academic Certificates */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b border-border pb-2">
                🏫 Academic Certificates
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: "Frontend Development Training",
                    org: "Hinduja College (2021–2022)",
                    link: "https://drive.google.com/file/d/1DsbU8ee2-nj45X2hn6fcMCeHsXWunN6s/view",
                  },
                  {
                    title: "React Development Training",
                    org: "Hinduja College (2023–2024)",
                    link: "https://drive.google.com/file/d/1yfEAoGFH0v0ZXUgTpkBPCUCE6BzNv3we/view",
                  },
                ].map((cert, i) => (
                  <Card
                    key={i}
                    className="border border-border p-4 shadow-sm flex flex-col"
                  >
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.org}
                    </p>
                    <div className="mt-auto">
                      <Button size="sm" variant="outline" asChild>
                        <a href={cert.link} target="_blank">
                          View
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
