import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-primary">Resume</span>
              </h1>
              <p className="text-muted-foreground">
                View or download my resume below.
              </p>
            </div>

            {/* Card Container */}
            <div className="bg-background/60 backdrop-blur-lg border border-border rounded-2xl shadow-lg p-6 md:p-10">
              {/* Button */}
              <div className="flex justify-center mb-8">
                <a
                  href="https://drive.google.com/file/d/18ffPnLaN1lszVogSTgS2o1f-QrTP1TkF/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Download Resume</Button>
                </a>
              </div>

              {/* Resume Preview */}
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  src="https://drive.google.com/file/d/18ffPnLaN1lszVogSTgS2o1f-QrTP1TkF/preview"
                  className="w-full h-[75vh]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
