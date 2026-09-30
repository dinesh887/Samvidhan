import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { monetizationConfig } from "../data/monetizationConfig";
import AffiliateDisclosure from "./AffiliateDisclosure";

export default function RecommendedBooks({ books }) {
  const { pick } = useLanguage();

  if (!monetizationConfig.affiliate.enabled) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Section Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Reading list
          </p>

          <h2 className="font-display mt-2 text-3xl font-semibold text-navy dark:text-ink-dark">
            {pick({
              en: "Recommended Books",
              mr: "शिफारस केलेली पुस्तके",
            })}
          </h2>
        </div>
      </div>

      {/* Books */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {books.map((book) => (
          <article
            key={book.id}
            className="flex gap-5 rounded-2xl border border-navy/10 bg-white/60 p-5 shadow-sm transition hover:shadow-md dark:border-ink-dark/10 dark:bg-white/[0.04]"
          >
            {/* Book Image */}
            <div className="h-40 w-28 shrink-0 overflow-hidden rounded-lg bg-navy/[0.06] dark:bg-white/10">
              {book.image ? (
                <img
                  src={book.image}
                  alt={pick(book.title)}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-[10px] text-ink/40 dark:text-ink-dark/40">
                  Book cover
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="flex min-w-0 flex-1 flex-col">
              {/* Category */}
              <p className="text-xs text-saffron">
                {book.category} · {book.language}
              </p>

              {/* Title */}
              <h3 className="font-display mt-1 font-semibold leading-snug text-navy dark:text-ink-dark">
                {pick(book.title)}
              </h3>

              {/* Author */}
              {book.author && (
                <p className="mt-1 text-xs text-ink/50 dark:text-ink-dark/50">
                  {book.author}
                </p>
              )}

              {/* Short Description */}
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
                {pick(book.description)}
              </p>

              {/* Bottom Row */}
              <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                {/* Price */}
                {book.price && (
                  <p className="text-lg font-bold text-navy dark:text-ink-dark">
                    ₹{book.price}
                  </p>
                )}

                {/* Buy Button */}
                <a
                  href={book.affiliateUrl || undefined}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  aria-disabled={!book.affiliateUrl}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    book.affiliateUrl
                      ? "bg-saffron text-white hover:opacity-90"
                      : "pointer-events-none bg-ink/10 text-ink/35"
                  }`}
                >
                  {book.affiliateUrl ? (
                    <>
                      Buy Now
                      <ExternalLink size={14} />
                    </>
                  ) : (
                    "Link coming soon"
                  )}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Affiliate Disclosure */}
      {/* <div className="mt-5">
        <AffiliateDisclosure />
      </div> */}
    </section>
  );
}
