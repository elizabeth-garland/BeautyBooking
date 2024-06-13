using Microsoft.EntityFrameworkCore;
using backend.Models.DTOs;
using backend.Repositories.Interface;
using backend.DataAccess;

namespace backend.Repositories.Repository
{
    public class TalentBusinessRepository(BeautyDbContext context) : ITalentBusinessRepository
    {
        private readonly BeautyDbContext _context = context;

        public async Task<TalentBusiness> GetBusinessByIdAsync(string businessId) {
            var business = await _context.TalentBusiness.Where(u => u.BusinessId == businessId).FirstOrDefaultAsync() ?? throw new KeyNotFoundException($"Business with id {businessId} cannot be found");
            return business;
        }
    }
}