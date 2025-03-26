import React, { useState } from "react";
import {
  FileText,
  ExternalLink,
  Star,
  BookOpen,
  Award,
  ThumbsUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

const Publications: React.FC = () => {
  const [highlightedPatent, setHighlightedPatent] = useState<number | null>(
    null
  );
  const [highlightedPaper, setHighlightedPaper] = useState<number | null>(null);

  const handleCite = (type: string, id: number) => {
    toast({
      title: "Citation Info Copied",
      description: `The citation for this ${type} has been copied to clipboard.`,
    });
  };

  const handleRequest = (type: string, id: number) => {
    toast({
      title: "Request Sent",
      description: `Your request for more details about this ${type} has been sent to Dr. Atmuri.`,
    });
  };

  return (
    <div className="section-reveal py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
          <FileText className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Publications & Patents</h2>
      </div>

      <Tabs defaultValue="publications" className="w-full">
        <TabsList className="grid w-full grid-cols-2 neo-glass mb-6">
          <TabsTrigger
            value="publications"
            className="data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            <FileText className="mr-2 h-4 w-4" /> Publications
          </TabsTrigger>
          <TabsTrigger
            value="patents"
            className="data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            <BookOpen className="mr-2 h-4 w-4" /> Patents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="patents" className="space-y-4">
          {[
            {
              id: 1,
              title: "Sulfur-containing lipids",
              authors: "Atmuri N D P.; Arnold D.; Saadati F.; Ciufolini M.",
              publication: "WO2023215989A1 WIPO (PCT)",
              date: "Nov 16, 2023",
              link: "#",
            },
            {
              id: 2,
              title: "Synthetic method for producing ionizable amino lipids",
              authors: "Saadati F.; Atmuri N D P.; Ciufolini M.",
              publication: "WO2023173203A1 WIPO (PCT)",
              date: "Sep 21, 2023",
              link: "#",
            },
            {
              id: 3,
              title:
                "Method for producing ionizable lipids or intermediates for the synthesis of such lipids",
              authors:
                "Atmuri N D P.; Arnold D.; Saadati F.; Kurek D.; Kulkarni J.; Witzigmann D.; Ciufolini M.",
              publication: "WO2023147657A1 WIPO (PCT)",
              date: "Aug 10, 2023",
              link: "#",
            },
          ].map((patent) => (
            <Card
              key={patent.id}
              className={`neo-glass transition-all duration-300 ${
                highlightedPatent === patent.id
                  ? "ring-2 ring-accent shadow-lg"
                  : ""
              }`}
              onMouseEnter={() => setHighlightedPatent(patent.id)}
              onMouseLeave={() => setHighlightedPatent(null)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-start">
                  <span className="text-lg font-semibold">{patent.title}</span>
                  <Badge className="">{patent.date}</Badge>
                </CardTitle>
                <CardDescription className="text-sm">
                  {patent.authors}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm mb-3">{patent.publication}</div>

                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs neo-glass text-black"
                          onClick={() => handleCite("patent", patent.id)}
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          Cite This Patent
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Get citation information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs neo-glass text-black"
                          onClick={() => handleRequest("patent", patent.id)}
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Request Details
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Request additional information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="publications" className="space-y-4">
          {[
            {
              id: 1,
              title:
                "Prostaglandin F2α and angiotensin II type 1 receptors exhibit differential cognate G protein coupling regulation",
              authors:
                "Sedki D.; Cho A.; Cao Y.; Nikolajev L.; Atmuri N. D. P.; Lubell W. D.; Laporte S. A.",
              journal: "J. Biol. Chem.",
              year: "2022",
              volume: "298(9)",
              pages: "102294",
              link: "https://www.jbc.org/article/S0021-9258(22)00736-0/fulltext",
              featured: "Highly Cited",
            },
            {
              id: 2,
              title:
                "Losartan metabolite EXP3179 is a unique blood pressure-lowering AT1R antagonist with direct, rapid endothelium-dependent vasoactive properties",
              authors: "E. Sauge.; Pechkovsky D.; Atmuri N. D. P., et al.",
              journal: "Vasc. Pharmacol.",
              year: "2022",
              volume: "147",
              pages: "107112",
              link: "https://www.sciencedirect.com/science/article/pii/S1537189122001616?via%3Dihub",
            },
            {
              id: 3,
              title:
                "Stereo- and regiochemical transannular cyclization of a common hexahydro-1H-azonine to afford three different indolizidinone dipeptide mimetics",
              authors: "Atmuri, N. D. P.; Lubell, W. D.",
              journal: "J. Org. Chem.",
              year: "2020",
              volume: "85",
              pages: "1340–1351",
              link: "https://pubs.acs.org/doi/10.1021/acs.joc.9b01861",
              featured: "Selected as cover page",
            },
            {
              id: 4,
              title:
                "Paired Utility of Aza-Amino Acyl Proline and Indolizidinone Amino Acid Residues for Peptide Mimicry: Conception of Prostaglandin F2a Receptor Allosteric Modulators that Delay Preterm Birth",
              authors:
                "Fatemeh M. M.*; Atmuri, N. D. P.*; Bourguet, C. B.; Jennifer R. F.; Hou X.; Chemtob S.; Lubell W. D.",
              journal: "J. Med. Chem.",
              year: "2019",
              volume: "62",
              pages: "4500–4525",
              link: "https://pubs.acs.org/doi/pdf/10.1021/acs.jmedchem.9b00056",
              note: "*Equal Contribution",
            },
          ].map((paper) => (
            <Card
              key={paper.id}
              className={`neo-glass transition-all duration-300 ${
                highlightedPaper === paper.id
                  ? "ring-2 ring-accent shadow-lg"
                  : ""
              }`}
              onMouseEnter={() => setHighlightedPaper(paper.id)}
              onMouseLeave={() => setHighlightedPaper(null)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {paper.title}
                  </CardTitle>
                  {paper.featured && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black border-none ml-2">
                      <Star className="mr-1 h-3 w-3" /> {paper.featured}
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {paper.authors}
                  {paper.note && (
                    <span className="italic ml-1">({paper.note})</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm mb-3">
                  {paper.journal}, {paper.year}, {paper.volume}, {paper.pages}
                </div>

                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          View Publication
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open in a new tab</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs neo-glass text-black"
                          onClick={() => handleCite("publication", paper.id)}
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          Cite This Work
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Get citation information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="neo-glass">
            <CardHeader>
              <CardTitle className="text-lg">Book Chapter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">
                "Ring Closing Metathesis / Transannular Cyclization to
                Azabicyclo[X.Y.0]alknanone Dipeptide Turn Mimics"
              </div>
              <div className="text-sm mt-1">
                Atmuri, N. D. P.; Surprenant, S.; Diarra, S.; Bourguet, C.;
                Lubell, W. D.
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Elsevier Book Project - Peptide and Peptidomimetic Therapeutics:
                From Bench to Bedside.
                <br />
                Academic Press, 2022, ISBN-0128204478, 9780128204474, Chapter 6.
                Page 125–147.
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs neo-glass text-black"
                        onClick={() => handleCite("book", 1)}
                      >
                        <FileText className="mr-1 h-3 w-3" />
                        Cite This Chapter
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get citation information</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>

          <div className="premium-glass p-4 rounded-xl mt-2">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-amber-400 mr-2" />
              <h3 className="text-lg font-semibold">
                Work Highlighted by Scientific Community:
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Cover page of The Journal of Organic Chemistry 2020, Volume 85,
                Issue 3, "Modern Peptide and Protein Chemistry."
              </li>
              <li>
                Iodonium ion cyclization at Chem. help ASAP,
                <a
                  href="https://youtu.be/P7dxSZUJ02A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-accent hover:text-accent/80 transition-colors underline"
                >
                  Watch Video
                </a>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Publications;
