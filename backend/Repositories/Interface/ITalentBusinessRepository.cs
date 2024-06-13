using backend.Models.DTOs;

namespace backend.Repositories.Interface
{
    public interface ITalentBusinessRepository
    {
        Task<TalentBusiness> GetBusinessByIdAsync(string businessId);
    }
}